import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import CardSetPassSlider from './CardSetPassSlider';
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

const CardSetLeaderBoard = observer(() => {
    const classes = useStyles();

    const {object} = useContext(Context);
    const {user} = useContext(Context);

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');

    const getUserNameById = (userId) => {
        for (let i = 0; i < user.users.length; i++) {
            if (userId === user.users[i].id) {
                return user.users[i].first_name;
            }
            
        } 
    }

    return (
        <div className={classes.test}>
            <div>
                Leaderboard
                {object.userRates.map((userRate, index) => {
                    return <LogItem key={userRate.id} message1={String(userRate.grade)} message2={getUserNameById(userRate.userId)}></LogItem>
                })}
            </div>
        </div>
    )
})

export default CardSetLeaderBoard
