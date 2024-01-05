import React, { useContext } from 'react';
import {makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
// import Menu from './Menu';

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

        // paddingTop: '50px',

        borderRadius: '60px',
        width: '180px'
    },
    signUpButtonText: {
        color: '#0A092E',
        fontSize: '24px'
    },
}))

const Profile = observer(() => {
    const classes = useStyles();

    const {user} = useContext(Context); 

    // let userMod = user.user.credits.map(obj => {
    //     let {first_name, last_name, email, password} = obj;
    //     return {first_name, last_name, email, password};
    // })

    console.log(user.user);

    // let a = user.user;
   
    let a = {
        first_name: user.user.first_name,
        last_name: user.user.last_name,
        email: user.user.email,
        password: user.user.password
    }

    console.log(a);

    return (
        <div className={classes.test}>    
            <ObjectItem key={user.user.id} message={'Profile'} object={a}></ObjectItem>    
        </div>
    )
})

export default Profile
