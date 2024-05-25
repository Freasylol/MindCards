import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useSharedStyles from './useSharedStyles';
import DashBoard from './DashBoard';

const useStyles = makeStyles((theme) => ({ 
    btn: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#4255FF',
        
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        cursor: 'pointer',

        borderRadius: '60px',
        padding: '5px 20px', 
        marginBottom: '10px',
        color: '#fff'   
    },
}))

const Task = observer(() => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');

    // setContentState('question');

    // const start = async() => {
    //     setContent('ball');
    //     setContentState('question')
    // }

    // start();


    const handleClick = async(e) => {
        console.log(contentState);
        if (contentState === 'answer') {
            setContent('ball');
            setContentState('answer');
        } else if (contentState === '' || contentState === 'question') {
            setContent('мяч');
            setContentState('question');
        }  
    }
 
    const {object} = useContext(Context);

    return (
        <div>
            <DashBoard />
        </div>

        
    )
})

export default Task
