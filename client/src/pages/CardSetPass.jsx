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

const CardSetPass = observer(() => {
    const classes = useStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');

    // setContentState('question');

    // const start = async() => {
    //     setContent('ball');
    //     setContentState('question')
    // }

    // start();


    // const handleClick = async(e) => {
    //     console.log(contentState);
    //     if (contentState === 'answer') {
    //         setContent('ball');
    //         setContentState('answer');
    //     } else if (contentState === '' || contentState === 'question') {
    //         setContent('мяч');
    //         setContentState('question');
    //     }  
    // }
 
    const {object} = useContext(Context);

    return (
        <div className={classes.test}>
             {/* {content} */}   
            <div>
                CardSetPass
                {/* <NavLink to="/createCardSet">
                    <button>New CardSet</button>
                </NavLink> */}
                {/* {object.cardSets.map(cardSet => {
                        return <CardSetItem key={cardSet.id} message={'Deposit'} object={cardSet}></CardSetItem>
                })} */}
                <div>
                <CardSetPassSlider></CardSetPassSlider>
                    {/* {object.cards.map(card => {
                        return <CardSetPassSlider key={card.accountId} message={'BankAccount'} cardObject={card}></CardSetPassSlider>
                    })} */}
                </div>
            </div>
        </div>
    )
})

export default CardSetPass
