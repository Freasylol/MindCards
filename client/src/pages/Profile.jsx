import React, { useContext } from 'react';
import {makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import ObjectItem from './ObjectItem';
import EditableField from './EditableField';
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
    // editButton: {
        
    // }
}))

const Profile = observer(() => {
    const classes = useStyles();

    const {user} = useContext(Context); 

    console.log(user.user);
   
    let a = {
        first_name: user.user.first_name,
        last_name: user.user.last_name,
        email: user.user.email,
        // password: user.user.password,
        password: user.user.decryptedPassword
    }

    console.log(a);

    return (
        <div className={classes.test}>  
            <EditableField header="First Name" text={user.user.first_name} field="first_name"></EditableField>
            <EditableField header="Last Name" text={user.user.last_name} field="last_name"></EditableField>
            <EditableField header="Email" text={user.user.email} field="email"></EditableField>
            <EditableField header="Password" text={user.user.decryptedPassword} field="password"></EditableField>
        </div>
    )
})

export default Profile
