import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import LogItem from './LogItem';
import useSharedStyles from './useSharedStyles';

const useStyles = makeStyles((theme) => ({
}))

const BrowsingHistory = observer(() => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');

    const {object} = useContext(Context);

    const getCardSetNameById = (favoriteCardSetId) => {
        for (let i = 0; i < object.cardSets.length; i++) {
            if (favoriteCardSetId === object.cardSets[i].id) {
                return object.cardSets[i].name;
            }
        } 
    }

    return (
        <div className={sharedClasses.wrapper}>  
            <div className={sharedClasses.container}>
                Browsing History
                {object.browsingHistory.map((browsingHistory) => {
                    return <LogItem key={browsingHistory.id} message1={''} message2={getCardSetNameById(browsingHistory.cardSetId)}></LogItem>
                })}
            </div>
        </div>
    )
})

export default BrowsingHistory
