import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
// import { set } from 'core-js/core/dict';

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
        <div className={classes.test} onClick={handleClick}>
            {content}
            {/* <div>f
               {object.aims.map(aim => {
                    return <ObjectItem key={aim.id} message={'Deposit'} object={aim}></ObjectItem>
               })}
            </div> */}
        </div>
    )
})

export default CardSet
