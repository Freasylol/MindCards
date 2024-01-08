import React, { useState, useContext } from "react";
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { makeStyles} from '@material-ui/core';

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

const CardSetPassSlider = (({message, cardObject}) => {
    const classes = useStyles();

    const {object} = useContext(Context);

    const [index, setIndex] = useState(0);
    const [isTask, setIsTask] = useState(true);
    const [content, setContent] = useState(object.cards[index].task);

    

    const handlePrev = async(e) => {
        if (index !== 0) {
            setIndex(index - 1);
            setContent(object.cards[index].task);
        }
    }

    const handleNext = async(e) => {
        if (index + 1 < object.cards.length) {
            setIndex(index + 1);
            setContent(object.cards[index].task)
        } else {
            setContent('completed');
        }
    }

    const handleContent = async(e) => {
        if (isTask === true) {
            setIsTask(false);
            setContent(object.cards[index].answer);
        } else {
            setIsTask(true);
            setContent(object.cards[index].task);
        }
    }

    return (
        <div>
            {/* {Object.keys(cardObject).map(key => {
                return <div key={key}>
                    <pre>{key}: {cardObject[key]}</pre>
                    
                </div>
            })} */}

            <button className={classes.signUpButton} onClick={handleContent}>
                <div className={classes.testStyle}>{content}</div>
            </button>
            {/* <button>
                <div>{object.cards[index].task}</div>
            </button> */}
            <div>{object.cards[index].answer}</div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
})

export default CardSetPassSlider;
