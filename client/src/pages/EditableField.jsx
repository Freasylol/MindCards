import React, { useState } from 'react';
import Axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../index';
import { jwtDecode } from 'jwt-decode';


const EditableField = observer(({ header, text, field }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const {user} = useContext(Context);

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
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
});

export default EditableField;
