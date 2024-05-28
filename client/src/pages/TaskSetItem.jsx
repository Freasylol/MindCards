import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Axios from 'axios';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import EditableField from './EditableField';
import { makeStyles } from '@material-ui/core';

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
        marginLeft: '5px',  
        color: '#fff' 
    },
    editableItem: {
        display: 'flex',
        marginBottom: '10px'
    }
}))

const CardSetItem = observer(({taskSetOrder, taskSetObject}) => {
    const classes = useStyles();

    const history = useHistory();

    const {object} = useContext(Context);
    const {user} = useContext(Context);

    let cards = object.cards;
    let cardSets = object.cardSets;
    let cardsIndexObject = {};
    let cardsCountObject = {};

    for (let i = 0; i < cards.length; i++) {
        let cardSetId = cards[i].cardSetId;
        let cardId = cards[i].id;
        cardsIndexObject[cardId] = cardSetId;
        
        if (cardsCountObject[cardSetId]) {
            cardsCountObject[cardSetId] += 1;
        } else {
            cardsCountObject[cardSetId] = 1;
        }
        console.log(cardSetId);
        console.log(cardId);
    }


    const handleCardsIndex = async(e) => {
        e.preventDefault();
        let cards = object.cards;
        let cardSets = object.cardSets;
        let cardsIndexObject = {};
        let cardsCountObject = {};

        for (let i = 0; i < cards.length; i++) {
            let cardSetId = cards[i].cardSetId;
            let cardId = cards[i].id;
            cardsIndexObject[cardId] = cardSetId;
            
            if (cardsCountObject[cardSetId]) {
                cardsCountObject[cardSetId] += 1;
            } else {
                cardsCountObject[cardSetId] = 1;
            }
            console.log(cardSetId);
            console.log(cardId);
        }

        console.log(cardsCountObject);
        object.setCardSetsCount(cardsCountObject);

        console.log(cardsIndexObject);
    }

    const handleCardSetPass = async(e) => {
        e.preventDefault();
        console.log(e.target.className);
        const cardData = await Axios.get(`http://localhost:3001/api/card/findByCardSet/${taskSetObject.id}`)
        console.log(cardData.data);
        object.setCards(cardData.data);
        object.setCurrentCardSetId(taskSetObject.id);
        history.push('/cardSetPass');
    }

    const handleView = async(e) => {
        e.preventDefault();
        console.log(e.target.className);
        const cardData = await Axios.get(`http://localhost:3001/api/card/findByCardSet/${taskSetObject.id}`)
        console.log(cardData.data);
        object.setCards(cardData.data);
        object.setCurrentCardSetId(taskSetObject.id);
        history.push('/cardSetView');
    }

    const handleLeaderboard = async(e) => {
        e.preventDefault();
        const userRateData = await Axios.get(`http://localhost:3001/api/userRate/findByCardSet/${taskSetObject.id}`);
        userRateData.data.sort((a, b) => b.grade - a.grade);
        console.log(userRateData.data);
        object.setUserRates(userRateData.data);
        history.push('/cardSetLeaderBoard');
    }

    const handleDelete = async(e) => {
        e.preventDefault();
        let cardSetIndex = e.target.className;
        let cardSetId = object.cardSets[cardSetIndex].id;
        let cardSets = object.cardSets;
        cardSets.splice(cardSetIndex, 1);
        object.setCardSets(cardSets);
        await Axios.delete(`http://localhost:3001/api/cardSet/${cardSetId}`);
    }

    const handleFavorite = async(e) => {
        e.preventDefault();
        let cardSetIndex = e.target.className;
        let cardSetId = object.cardSets[cardSetIndex].id;
        await Axios.post(`http://localhost:3001/api/favoriteCardSet`, {
            userId: user.user.id,
            cardSetId: cardSetId
        })
    }

    let cardSetButtonClasses = classes.btn + ' ' + taskSetOrder.toString();

    return (
        <div className={classes.editableItem} style={{backgroundColor: '#2E3856', borderRadius: '40px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>          
            <div style={{marginTop: '40px', fontSize: '24px'}}>{taskSetObject.name}</div>
            <div style={{marginTop: '40px', fontSize: '24px'}}>{taskSetObject.description}</div>
            <div style={{marginTop: '40px', fontSize: '24px'}}>{taskSetObject.theme}</div>
            <div>
                {/* <button style={{display: 'block', marginTop: '20px'}} className={cardSetButtonClasses} onClick={handleFavorite}>Favorite</button>
                <button style={{display: 'block', marginTop: '20px'}} className={cardSetButtonClasses} onClick={handleView}>View</button> */}
                <div style={{marginTop: '20px'}}>{object.taskSetsCount[object.cardSets[taskSetOrder].id] ? object.taskSetsCount[object.taskSets[taskSetOrder].id] : 0}</div>

            </div>
        </div>
    )
})

export default CardSetItem;
