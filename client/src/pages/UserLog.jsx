import React, { useContext, useState } from 'react';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import LogItem from './LogItem';
import useSharedStyles from './useSharedStyles';

const UserLog = observer(() => {
    const sharedClasses = useSharedStyles();

    const [content, setContent] = useState('');
    const [contentState, setContentState] = useState('');

    const {object} = useContext(Context);

    return (
        <div className={sharedClasses.root}>  
            <div className={sharedClasses.wrapper}>
                <div className={sharedClasses.container}>
                    {object.userLog.map((userLog) => {
                        return <LogItem key={userLog.id} message1={''} message2={userLog.action}></LogItem>
                    })}
                </div>
            </div>
        </div>
    )
})

export default UserLog
