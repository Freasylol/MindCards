import React, { useContext } from "react";
import { AppBar, Container, Toolbar, Button, makeStyles, Link} from '@material-ui/core';
import RegistrationForm from "./RegistrationForm.jsx";
import LoginForm from "./LoginForm";
import appIcon from '../images/cards.png';
import profileIcon from '../images/user-icon.png';
import plusIcon from '../images/crosshair-cardset.png';
import { observer } from 'mobx-react-lite';
import { Context } from "../index.js";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    project: {
        width: '100%',
        height: '10vh',
        backgroundColor: '#0A092E',
        color: '#F6F7FB',
        borderBottom: '1px solid #000000'
    },
    leftNavBar: {
        display: 'flex',
        alignItems: 'center',
    },
    navBarContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    link: {
        textDecoration: 'none', 
        color: "#F6F7FB",
        cursor: 'pointer',
    }
}))

const DashBoard = observer(() => {
    const classes = useStyles();

    const {user} = useContext(Context);

    const logout = async () => {
        user.setIsAuth(false);
    }

    let authBlock = null;

    if (user.isAuth === false) {
         
        authBlock = <div style={{display: "flex"}}>
            <LoginForm />
            <div style={{marginLeft: '10px'}}>
                <RegistrationForm/>
            </div>
        </div>
    } else {
        authBlock =
        <Button color="inherit" variant="outlined" onClick={logout}>
            Logout
        </Button>
    }

    return (
    <div className={classes.project}>

        <Container className={classes.container}>
            <div className={classes.overlay} />
            <Toolbar className={classes.navBarContainer}>
                    <div className={classes.leftNavBar}>                    
                        <NavLink to="/" className={classes.link}>MindCards</NavLink> 
                        <img src={appIcon} height={40} alt="Bank App Icon"></img>
                        <div>{user.user.first_name}</div>
                        <NavLink style={{paddingLeft: '50px'}} to="/cardSet" className={classes.link}>Your library</NavLink>           
                    </div> 
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{marginRight: '50px', display: 'flex', alignItems: 'center'}}>
                            <img src={profileIcon} height={40} alt="profile App Icon"></img>
                        </div>
                        <div style={{marginRight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2E3856', borderRadius: '50%', width: '40px', height: '40px'}}>
                            <img src={plusIcon} height={32} alt="profile App Icon"></img>
                        </div>
                        {authBlock}
                    </div>  
                    
            </Toolbar>
        </Container>
    </div>
    )
})

export default DashBoard;
