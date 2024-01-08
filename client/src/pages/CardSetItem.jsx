import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Axios from 'axios';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';

const CardSetItem = (({cardSetOrder, message, cardSetObject}) => {

    const history = useHistory();

    const {object} = useContext(Context);

    const handleCardSetPass = async(e) => {
        e.preventDefault();
        console.log(e.target.className);
        // let index = e.target.className
        const cardData = await Axios.get(`http://localhost:3001/api/card/findByCardSet/${cardSetObject.id}`)
        console.log(cardData.data);
        object.setCards(cardData.data);
        // window.location.replace('http://localhost:3000/cardSetPass');
        history.push('/cardSetPass');
    }

    return (
        <div>
            {/* editcardset */}
            <NavLink to="/profile">
                <button>
                    {cardSetObject.name}
                </button>
            </NavLink>
            <button class={cardSetOrder}>Edit</button>
            <button class={cardSetOrder}>Save</button>
            <button class={cardSetOrder}>Delete</button>
            <button class={cardSetOrder}>Favorite</button>
            <button class={cardSetOrder}>LeaderBoard</button>
            <button class={cardSetOrder} onClick={handleCardSetPass}>Pass</button>
        </div>
    )
})

export default CardSetItem;
