import React, { useState } from 'react';
import Axios from 'axios';
import { makeStyles, Dialog, useTheme, useMediaQuery, DialogActions, Button } from '@material-ui/core';
import { jwtDecode } from 'jwt-decode';
import { Context } from '../index';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import "core-js/stable/atob";
import { CARDSET_PASS_ROUTE } from '../utils/consts';

const useStyles = makeStyles((theme) => ({
    signUp: {
        color: '#F6F7FB',
        backgroundColor: '#0A092E',
        padding: '20px',
        boxSizing: 'border-box',
        margin: 0,
        fontSize: '24px'
    },
    signUpForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signUpInput: {
        border: '1px solid #7E7E7E',
        borderRadius: '60px',
        outline: 'none',
        outlineOffset: '0',
        lineHeight: '1.5em',
        padding: '4px 6px',
        display: 'block',
        width: '300px',
        boxSizing: 'border-box',
        backgroundColor: '#2E3856',
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

        marginTop: '50px',

        borderRadius: '60px',
        width: '180px'
    },
    signUpButtonText: {
        color: '#0A092E',
        fontSize: '24px'
    },
    singUpLabel: {
        fontSize: '20px'
    },
}))

const LoginForm = observer(() => {
    const classes = useStyles();
    const theme = useTheme();

    const[openAuthDialog, setAuthDialog] = useState(false);

    const handleOpenAuthDialog = () => setAuthDialog(true);

    const handleCloseAuthDialog = () => setAuthDialog(false);

    const handleOpenLogInDialog = () => setOpenLogInDialog(true);

    const handleCloseLogInDialog = () => {
        console.log('close');
        setOpenLogInDialog(false);
    } 

    const handleCloseLogInDialogOpenAuth = () => {
        setOpenLogInDialog(false);
        handleOpenAuthDialog();
    }

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const[openLogInDialog, setOpenLogInDialog] = useState(false);

    const {user} = useContext(Context);
    const {object} = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState('');

    const [token, setToken] = useState('');

    const countCardSets = async () => {
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
            object.setCardSetsCount(cardsCountObject);
    }

    const countTaskSets = async () => {
        let tasks = object.tasks;
        let taskSets = object.cardSets;
        let taskSetsIndexObject = {};
        let taskSetsCountObject = {};
        
            for (let i = 0; i < tasks.length; i++) {
                let taskSetId = tasks[i].taskSetId;
                let taskId = tasks[i].id;
                taskSetsIndexObject[taskId] = taskSetId;
                
                if (taskSetsCountObject[taskSetId]) {
                    taskSetsCountObject[taskSetId] += 1;
                } else {
                    taskSetsCountObject[taskSetId] = 1;
                }
                console.log(taskSetId);
                console.log(taskId);
            }
            object.setTaskSetsCount(taskSetsCountObject);
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            const {data} = await Axios.post('http://localhost:3001/api/user/login', {
                email: email,
                password: password,            
            })
            console.log(data);
            await setToken(data);
            let jwtData = jwtDecode(token);
            localStorage.setItem('token', token)
            user.setIsAuth(true);
            const userData = await Axios.get(`http://localhost:3001/api/user/${jwtData.id}`);
            userData.data.decryptedPassword = password;
            user.setUser(userData.data);
            const usersData = await Axios.get(`http://localhost:3001/api/user`);
            user.setUsers(usersData.data);
            const cardSetsData = await Axios.get(`http://localhost:3001/api/cardSet/findByUserId/${user.user.id}`);
            console.log(cardSetsData.data);
            // let sortedCardSets = await cardSetsData.data.filter((a, b) => a.id - b.id);
            object.setCardSets(cardSetsData.data);
            // console.log(sortedCardSets);
            const cardsData = await Axios.get(`http://localhost:3001/api/card`);
            object.setCards(cardsData.data);
            console.log(cardsData.data);
            const favoriteCardSetsData = await Axios.get(`http://localhost:3001/api/favoriteCardSet/findByUserId/${user.user.id}`);
            object.setFavoriteCardSets(favoriteCardSetsData.data);
            const browsingHistoryData = await Axios.get(`http://localhost:3001/api/browsingHistory/findByUserId/${user.user.id}`);
            console.log(browsingHistoryData.data);
            // object.setBrowsingHistory(browsingHistoryData.data);
            const userLogData = await Axios.get(`http://localhost:3001/api/userLog/findByUserId/${user.user.id}`);
            console.log(userLogData.data);
            object.setUserLog(userLogData.data);
            countCardSets();
            countTaskSets();
            

        } catch(error) {
            console.log(error);
        }
    }

  return (
<div>
    <Button className={classes.logInButton} color="inherit" variant="outlined" onClick={handleOpenLogInDialog}>Log in</Button>
        <Dialog fullScreen={fullScreen} open={openLogInDialog} onClose={handleCloseLogInDialog} aria-labelledby='loginForm'>
        <div className={classes.signUp}>
        <form className={classes.signUpForm}>
            <div>
                Sign in your account
            </div>
            <div>
                <label className={classes.singUpLabel}>Email</label>
                <input  
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className={classes.signUpInput}  
                    // pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$" 
                    required>
                </input>
            </div>
            <div>
                <label className={classes.singUpLabel}>Password</label>
                <input 
                    type="text" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.signUpInput}
                    required>
                </input>
            </div>
            <button type="submit" onClick={submitLogin} className={classes.signUpButton}>
                <div className={classes.signUpButtonText}>
                    Sign In
                </div>
            </button>
        </form>
        </div> 
        </Dialog>
    </div> 
  )
})

export default LoginForm;


