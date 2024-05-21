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

const CardSetItem = observer(({cardSetOrder, message, cardSetObject}) => {
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

            // object.setCardSetsCount(cardsCountObject);


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

        // Object.keys(cardsIndexObject).map((item) => {
            
        // })

        // cardsIndexObject.filter((item) => {
            
        // })

        // for (const key in cardsIndexObject) {
        //     cardsIndexObject[key] = 
        // }
        console.log(cardsCountObject);
        object.setCardSetsCount(cardsCountObject);

        console.log(cardsIndexObject);
    }

    const handleCardSetPass = async(e) => {
        e.preventDefault();
        console.log(e.target.className);
        const cardData = await Axios.get(`http://localhost:3001/api/card/findByCardSet/${cardSetObject.id}`)
        console.log(cardData.data);
        object.setCards(cardData.data);
        object.setCurrentCardSetId(cardSetObject.id);
        history.push('/cardSetPass');
    }

    const handleView = async(e) => {
        e.preventDefault();
        console.log(e.target.className);
        const cardData = await Axios.get(`http://localhost:3001/api/card/findByCardSet/${cardSetObject.id}`)
        console.log(cardData.data);
        object.setCards(cardData.data);
        object.setCurrentCardSetId(cardSetObject.id);
        history.push('/cardSetView');
    }

    const handleLeaderboard = async(e) => {
        e.preventDefault();
        const userRateData = await Axios.get(`http://localhost:3001/api/userRate/findByCardSet/${cardSetObject.id}`);
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

    let cardSetButtonClasses = classes.btn + ' ' + cardSetOrder.toString();

    return (
        <div className={classes.editableItem} style={{backgroundColor: '#2E3856', borderRadius: '40px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>          
            {/* <EditableField style={{display: 'inline'}} header={''} text={cardSetObject.name} field={'cardSet'} cardSetIndex={cardSetOrder}></EditableField> */}
            <div style={{marginTop: '40px', fontSize: '24px'}}>{cardSetObject.name}</div>
            <div>
                {/* <button style={{display: 'block', marginTop: '40px'}} className={cardSetButtonClasses} onClick={handleCardsIndex}>CardsIndex</button> */}
                {/* <button className={cardSetButtonClasses} onClick={handleDelete}>Delete</button> */}
                <button style={{display: 'block', marginTop: '20px'}} className={cardSetButtonClasses} onClick={handleFavorite}>Favorite</button>
                {/* <button className={cardSetButtonClasses} onClick={handleView}>View</button> */}
                {/* <button className={cardSetButtonClasses} onClick={handleLeaderboard}>LeaderBoard</button> */}
                {/* <button className={cardSetButtonClasses} onClick={handleCardSetPass}>Pass</button> */}
                <div style={{marginTop: '20px'}}>{object.cardSetsCount[object.cardSets[cardSetOrder].id] ? object.cardSetsCount[object.cardSets[cardSetOrder].id] : 0}</div>
                {/* <div>{object.cards.length}</div> */}
            </div>
    
        </div>
    )
})

export default CardSetItem;
