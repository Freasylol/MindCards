import React, { useState, useContext } from "react";
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { makeStyles} from '@material-ui/core';
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
        width: '80vw',

        height: '50vh'
    },
    signUpButtonText: {
        color: '#0A092E',
        fontSize: '24px'
    },
    testStyle: {
        color: '#fff'
    },
}))

const CardSetViewSlider = observer(({message, cardObject}) => {
    const classes = useStyles();

    const {object} = useContext(Context);
    const {user} = useContext(Context);

    const [userAnswer, setUserAnswer] = useState('');
    const [rightAnswers, setRightAnswers] = useState(0);
    const [index, setIndex] = useState(0);
    const [isTask, setIsTask] = useState(true);
    const [content, setContent] = useState(object.cards[0].task);

    const handlePrev = async(e) => {
        e.preventDefault();
        if (index !== 0) {
            setIndex(index - 1);
            setContent(object.cards[index].task);
        }
    }

    const handleNext = async(e) => {
        e.preventDefault();
        if (index + 1 < object.cards.length) {
            await setIndex(index + 1);
            console.log(index);
        }
    }

    const handleContent = async(e) => {
        if (isTask === true) {
            setIsTask(false);
        } else {
            setIsTask(true);
        }
    }
    return (
        <div>
            <button className={classes.signUpButton} onClick={handleContent}>
                {/* {content} */}
                {isTask === true ?  object.cards[index].task : object.cards[index].answer}              
            </button>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
})

export default CardSetViewSlider;
