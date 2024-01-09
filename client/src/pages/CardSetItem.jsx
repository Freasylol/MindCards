import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Axios from 'axios';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { useRadioGroup } from '@material-ui/core';
import EditableField from './EditableField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    test: {
        // paddingTop: '50px',
        backgroundColor: '#0A092E',
        // height: '90vh',
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

        // paddingTop: '50px',

        borderRadius: '60px',
        width: '180px'
    },
    signUpButtonText: {
        color: '#0A092E',
        fontSize: '24px'
    },
    // editButton: {
        
    // }
}))

const CardSetItem = observer(({cardSetOrder, message, cardSetObject}) => {
    const classes = useStyles();

    const history = useHistory();

    const {object} = useContext(Context);
    const {user} = useContext(Context);

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

    return (
        <div style={{display: 'flex'}} className={classes.test}>          
            <EditableField style={{display: 'inline'}} header={''} text={cardSetObject.name} field={'cardSet'} cardSetIndex={cardSetOrder}></EditableField>
            <div style ={{marginLeft: '15px'}}>
                {/* <button class={cardSetOrder}>Edit</button> */}
                <button class={cardSetOrder} onClick={handleDelete}>Delete</button>
                <button class={cardSetOrder} onClick={handleFavorite}>Favorite</button>
                <button class={cardSetOrder} onClick={handleView}>View</button>
                <button class={cardSetOrder} onClick={handleLeaderboard}>LeaderBoard</button>
                <button class={cardSetOrder} onClick={handleCardSetPass}>Pass</button>
            </div>
        </div>
    )
})

export default CardSetItem;
