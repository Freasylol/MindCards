import React from 'react';
import { makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import useSharedStyles from './useSharedStyles';
// import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    navLinkStyle: {
        color: '#F6F7FB',
        textDecoration: 'none',
        display: 'block',
        cursor: 'pointer'
    },
    btn: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#4255FF',
        
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        cursor: 'pointer',

        borderRadius: '60px',
        padding: '10px 20px',
        marginBottom: '10px'
        },
}))

function Main() {
    const classes = useStyles();
    const sharedClasses = useSharedStyles();

    return (
        <div className={sharedClasses.wrapper}>
            <div className={sharedClasses.container}>
                <button className={classes.btn}>
                    <NavLink className={classes.navLinkStyle} to="/profile">My profile</NavLink>
                </button>
                <button className={classes.btn}>
                    <NavLink className={classes.navLinkStyle} to="/cardSet">My cardsets</NavLink>
                </button>
                <button className={classes.btn}>
                    <NavLink className={classes.navLinkStyle} to="/cardSetFavorite">My favorite cardsets</NavLink>
                </button>
                <button className={classes.btn}>
                    <NavLink className={classes.navLinkStyle} to="/browsingHistory">Browsing History</NavLink> 
                </button>
                <button className={classes.btn}>
                    <NavLink className={classes.navLinkStyle} to="/userLog">User Logs</NavLink> 
                </button>
                <button className={classes.btn}>
                    <NavLink className={classes.navLinkStyle} to="/search">Search</NavLink> 
                </button>
            </div>
        </div>                
    )
}

export default Main
