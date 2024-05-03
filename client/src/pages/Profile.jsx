import React, { useContext } from 'react';
import {makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import EditableField from './EditableField';
import useSharedStyles from './useSharedStyles';

const useStyles = makeStyles((theme) => ({
}))

const Profile = observer(() => {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

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
        <div className={sharedClasses.wrapper}>  
            <div className={sharedClasses.container}>
                <EditableField header="First Name" text={user.user.first_name} field="first_name" ></EditableField>
                <EditableField header="Last Name" text={user.user.last_name} field="last_name"></EditableField>
                <EditableField header="Email" text={user.user.email} field="email"></EditableField>
                <EditableField header="Password" text={user.user.decryptedPassword} field="password"></EditableField>
            </div>
        </div>
    )
})

export default Profile
