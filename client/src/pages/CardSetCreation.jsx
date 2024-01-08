import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import CardSetItem from './CardSetItem';
import AddElementButton from './AddElementButton';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
    test: {
        paddingTop: '50px',
        backgroundColor: '#0A092E',
        height: '90vh',
        color: '#F6F7FB'
    }, 
    signUpButton: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#4255FF',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        cursor: 'pointer',

        borderRadius: '60px',
        width: '180px'
    },
    signUpButtonText: {
        color: '#0A092E',
        fontSize: '24px'
    },
}))

const CardSet = observer(() => {
    const classes = useStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');
    const [cardSetName, setCardSetName] = useState('');
    const [cardSetDescription, setCardSetDescription] = useState('');

    const {user} = useContext(Context);
    const {object} = useContext(Context);

    const handleCardSetDescription = async(e) => {
        e.preventDefault();
        setCardSetDescription(e.target.value);
    }

    const handleCardSetName = async(e) => {
        e.preventDefault();
        setCardSetName(e.target.value);
    }

    const createCardSet = async(e) => {
        const {data} = await Axios.post('http://localhost:3001/api/cardSet', {
            name: cardSetName,
            description: cardSetDescription,
            userId: user.user.id,            
        })
        let buffer = object.cardSetsBuffer;
        console.log(buffer);
        console.log({
            task: object.cardSetsBuffer[0].term,
            answer: object.cardSetsBuffer[0].definition,
            cardSetId: data.id
        })
        if (object.cardSetsBuffer.length != 0) {
            object.cardSetsBuffer.map(async (cardSet) => {
                await Axios.post('http://localhost:3001/api/card', {
                task: cardSet.term,
                answer: cardSet.definition,
                cardSetId: data.id
                })
            })
        }
        object.setCardSetsBuffer()
    }

    return (
        <div className={classes.test}>
            <div>CardSet Name</div>
            <input type="text" onChange={handleCardSetName}></input>
            <div>CardSet Description</div>
            <input type="text" onChange={handleCardSetDescription}></input>
            <AddElementButton></AddElementButton>
            <button onClick={createCardSet}>
                Create CardSet
            </button>
        </div>
    )
})

export default CardSet
