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

const CardSetPassSlider = observer(({message, cardObject}) => {
    const classes = useStyles();

    const {object} = useContext(Context);
    const {user} = useContext(Context);

    let a = 0;

    const [userAnswer, setUserAnswer] = useState('');
    const [rightAnswers, setRightAnswers] = useState(0);
    const [index, setIndex] = useState(0);
    const [isTask, setIsTask] = useState(true);

    const handleUserAnswerChange = async(e) => {
        setUserAnswer(e.target.value);
    }

    const handlePrev = async(e) => {
        e.preventDefault();
        if (index !== 0) {
            setIndex(index - 1);
        }
    }

    const handleNext = async(e) => {
        e.preventDefault();
        if (index + 1 < object.cards.length) {
            if (userAnswer === object.cards[index].answer) {
                setRightAnswers(rightAnswers + 1);
            }
            a++
            setIndex(index + 1);
            console.log(index);
          
        } else {
            console.log(a);
            console.log(index);
            console.log(object.currentCardSetId);
            console.log(rightAnswers);

            await Axios.post(`http://localhost:3001/api/userRate`, {
                grade: rightAnswers,
                userId: user.user.id,
                cardSetId: object.currentCardSetId
            });

            await Axios.post(`http://localhost:3001/api/browsingHistory`, {
                userId: user.user.id,
                cardSetId: object.currentCardSetId
            })
        }
    }

    return (
        <div>
            <button className={classes.signUpButton}>
                {index < object.cards.length ?  object.cards[index].task : 'completed'}
                           
            </button>
            <button onClick={handleNext}>Next</button>
            <input type="text" onChange={handleUserAnswerChange}></input>
        </div>
    )
})

export default CardSetPassSlider;
