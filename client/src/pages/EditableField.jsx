import React, { useState } from 'react';
import Axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../index';
import {makeStyles} from '@material-ui/core';
import { jwtDecode } from 'jwt-decode';

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
        width: '50px',
        padding: '5px 20px',  
        color: '#fff'  
    },
    
}))

const EditableField = observer(({ header, text, field, cardSetIndex }) => {
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const {user} = useContext(Context);
  const {object} = useContext(Context);

  const handleInputChange = async (e) => {
    setEditedText(e.target.value);
  };

  const handleEditClick = async () => {
    console.log(field);
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    if (field === 'first_name') {
        user.user.first_name = editedText;
        await Axios.put('http://localhost:3001/api/user/editUser', {
                id: user.user.id,
                first_name: editedText           
            })
    } else if (field === 'last_name') {
        user.user.last_name = editedText;
        await Axios.put('http://localhost:3001/api/user/editUser', {
            id: user.user.id,
            last_name: editedText           
        })
    } else if (field === 'email') {
        user.user.email = editedText;
        const {data} = await Axios.put('http://localhost:3001/api/user/editUser', {
            id: user.user.id,
            email: editedText           
        })        
    } else if (field === 'password') {
        user.user.decryptedPassword = editedText;
        const {data} =  await Axios.put('http://localhost:3001/api/user/editUser', {
            id: user.user.id,
            password: editedText           
        })
        let jwtData = jwtDecode(data);
        localStorage.setItem('token', data);
        user.user.password = jwtData.password;
    // }
    } else if (field === 'cardSet') {
        object.cardSets[cardSetIndex].name = editedText;
        await Axios.put(`http://localhost:3001/api/cardSet/changeCardSetName/${object.cardSets[cardSetIndex].id}`, {
            name: editedText
        })
    }
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };


  return (
    <div>
      <p style={{display: 'inline'}}>{header + ' '}</p>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
        />
      ) : (
        <div style={{display: 'inline'}}>{text + ' '}</div>
        // <div>{text}</div>
      )}
      {isEditing ? (
        <div style={{display: 'inline'}}>
            <button className={classes.btn} onClick={handleSaveClick}>Save</button>
            <button className={classes.btn} onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <button className={classes.btn} onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
});

export default EditableField;
