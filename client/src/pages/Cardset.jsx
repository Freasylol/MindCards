import React, { useContext, useState } from 'react';
import { makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import CardSetItem from './CardSetItem';
import Axios from 'axios';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useSharedStyles from './useSharedStyles';
import DashBoard from './DashBoard';

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
        marginBottom: '10px',
        color: '#fff'   
    },
}))

const CardSet = observer(() => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();
 
    const {object} = useContext(Context);

    return (
        <div>
            <DashBoard />
            <div className={sharedClasses.wrapper}>
                <div className={sharedClasses.container}>
                    <NavLink to="/createCardSet">
                        <button className={classes.btn}>New CardSet</button>
                    </NavLink>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridColumnGap: '10px'}}>
                        {object.cardSets.map((cardSet,index) => {
                            return <CardSetItem key={cardSet.id} cardSetOrder={index} cardSetObject={cardSet}></CardSetItem>
                        })}
                    </div>
                  
                </div>
            </div>
        </div>

        
    )
})

export default CardSet
