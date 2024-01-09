import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import LogItem from './LogItem';

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
    testStyle: {
        color: '#fff'
    },
}))

const BrowsingHistory = observer(() => {
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
        <div className={classes.test}>  
            <div>
                Browsing History
                {object.browsingHistory.map((browsingHistory) => {
                    return <LogItem key={browsingHistory.id} message1={''} message2={getCardSetNameById(browsingHistory.cardSetId)}></LogItem>
                })}
            </div>
        </div>
    )
})

export default BrowsingHistory
