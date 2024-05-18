import React, { useState, useContext } from "react";
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { makeStyles} from '@material-ui/core';
import Axios from 'axios';
import useSharedStyles from "./useSharedStyles";

const useStyles = makeStyles((theme) => ({
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
    sliderBtn: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#4255FF',
        
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        cursor: 'pointer',

        borderRadius: '60px',
        width: '100px',
        padding: '20px 20px',  
        color: '#fff'  
    }
}))

const CardSetViewSlider = observer(({message, cardObject}) => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

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
            <button className={classes.signUpButton} onClick={handleContent} style={{marginBottom: '30px'}}>
                {/* {content} */}
                {isTask === true ?  object.cards[index].task : object.cards[index].answer}              
            </button>
            <div className={sharedClasses.container} style={{display: 'flex', justifyContent: 'center'}}>
                <button className={classes.sliderBtn} style={{marginRight: '30px'}} onClick={handlePrev}>Prev</button>
                <button className={classes.sliderBtn} onClick={handleNext}>Next</button>
            </div>
           
        </div>
    )
})

export default CardSetViewSlider;
