import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
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
    text: {
        color: '#fff'
    }
}))

const NonLogin = observer(() => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');
    return (
        <div>
            <DashBoard />
            <div className={sharedClasses.container} style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{color: '#fff', marginTop: '50px', fontSize: '36px'}}>Nice to meet you.Please log in</div>
            </div>  
        </div>
    )
})

export default NonLogin
