import React, { useState, useContext } from "react";
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { makeStyles} from '@material-ui/core';
import Axios from 'axios';
import useSharedStyles from "./useSharedStyles";
import RightArrow from '../images/right-arrow.png';
import LeftArrow from '../images/left-arrow.png';

const useStyles = makeStyles((theme) => ({
    cardDisplay: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#2E3856',
        fontSize: '40px',
        color: '#F6F7FB',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        cursor: 'pointer',
        
        width: '100%',

        height: '50vh'
    },
    sliderBtn: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#F6F7FB',
        
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        cursor: 'pointer',

        borderRadius: '100%',
        width: '80px',
        height: '80px',  
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
            <div className={sharedClasses.container}>
                <button className={classes.cardDisplay} onClick={handleContent} style={{marginBottom: '30px'}}>
                    {isTask === true ?  object.cards[index].task : object.cards[index].answer}              
                </button>
            </div>
           
            <div className={sharedClasses.container} style={{display: 'flex', justifyContent: 'center'}}>
                <button className={classes.sliderBtn} style={{marginRight: '50px'}} onClick={handlePrev}>
                    <img src={LeftArrow} height={32} alt="" />
                </button>
                <button className={classes.sliderBtn} onClick={handleNext}>
                    <img src={RightArrow} height={32} alt="" />
                </button>
            </div>
           
        </div>
    )
})

export default CardSetViewSlider;
