import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import LogItem from './LogItem';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        paddingTop: '50px',
        backgroundColor: '#0A092E',
        height: '90vh',
        color: '#F6F7FB'
    }, 
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
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
    testStyle: {
        color: '#fff'
    },
}))

const CardSetFavorite = observer(() => {
    const classes = useStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');

    const {object} = useContext(Context);

    const getCardSetNameById = (favoriteCardSetId) => {
        for (let i = 0; i < object.cardSets.length; i++) {
            if (favoriteCardSetId === object.cardSets[i].id) {
                return object.cardSets[i].name;
            }
        } 
    }

    return (
        <div className={classes.wrapper}>  
            <div className={classes.container}>
                Favorites
                {object.favoriteCardSets.map((favoriteCardSet) => {
                    return <LogItem key={favoriteCardSet.id} message1={''} message2={getCardSetNameById(favoriteCardSet.cardSetId)}></LogItem>
                })}
            </div>
        </div>
    )
})

export default CardSetFavorite
