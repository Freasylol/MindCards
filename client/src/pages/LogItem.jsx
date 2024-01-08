import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import CardSetPassSlider from './CardSetPassSlider';

const useStyles = makeStyles((theme) => ({
    test: {
        paddingTop: '10px',
        backgroundColor: '#0A092E',
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

const LogItem = observer(({message1, message2}) => {
    const classes = useStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');
 
    const {object} = useContext(Context);

    return (
        <div style={{display: 'flex'}} className={classes.test}>
            <div>{message1}</div>
            <div style={{marginLeft: '10px'}}>{message2}</div>
        </div>
    )
})

export default LogItem
