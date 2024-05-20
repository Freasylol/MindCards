import React, { useContext } from 'react';
import {makeStyles} from '@material-ui/core';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import EditableField from './EditableField';
import useSharedStyles from './useSharedStyles';
import DashBoard from './DashBoard';

const useStyles = makeStyles((theme) => ({
    editableItem: {
        marginBottom: '10px'
    }
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
        <div>
            <DashBoard />
            <div className={sharedClasses.wrapper}>  
                <div className={sharedClasses.container}>
                    <div className={classes.editableItem}>
                        <EditableField style={{color: '#000'}} header="First Name" text={user.user.first_name} field="first_name" ></EditableField>
                    </div>
                    <div className={classes.editableItem}>
                        <EditableField style={{marginBottom: '10px'}} header="Last Name" text={user.user.last_name} field="last_name"></EditableField>
                    </div>
                    <div className={classes.editableItem}>
                        <EditableField style={{marginBottom: '10px'}} header="Email" text={user.user.email} field="email"></EditableField>
                    </div>
                    <div className={classes.editableItem}>
                        <EditableField style={{marginBottom: '10px'}} header="Password" text={user.user.decryptedPassword} field="password"></EditableField>
                    </div>
                </div>
            </div>
        </div>
        
    )
})

export default Profile
