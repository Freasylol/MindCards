import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import CardSetPassSlider from './CardSetPassSlider';
import useSharedStyles from './useSharedStyles';

const useStyles = makeStyles((theme) => ({
    logItem: {
        marginBottom: '10px',
        color: '#F6F7FB',
        backgroundColor: '#2E3856',
        padding: '10px',
        fontSize: '18px',
        borderRadius: '45px',
    }
}))

const LogItem = observer(({message1, message2}) => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');
 
    const {object} = useContext(Context);

    return (
        <div style={{display: 'flex', backgroundColor: '#2E3856'}} className={classes.logItem}>
            <div>{message1}</div>
            <div style={{marginLeft: '10px'}}>{message2}</div>
        </div>
    )
})

export default LogItem
