import React, { useState, useContext } from 'react';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { makeStyles} from '@material-ui/core';

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

        borderRadius: '60px',
        width: '180px'
    },
    signUpButtonText: {
        color: '#0A092E',
        fontSize: '24px'
    },
    testStyle: {
        color: '#fff'
    },
}))

const Search = observer(() => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const {object} = useContext(Context);

  // Определите функцию для обработки изменений ввода
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Определите функцию для обработки отправки формы поиска
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Используйте регулярное выражение для выполнения поиска
    const regex = new RegExp(searchQuery, 'i');
    let cardSetsNames = [];
    for (let i = 0; i < object.cardSets.length; i++) {
        cardSetsNames.push(object.cardSets[i].name);
    }
    const filteredResults = cardSetsNames.filter((cardSetName) => regex.test(cardSetName));

    setSearchResults(filteredResults);
  };

  return (
    <div className={classes.test}>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {/* Отображение результатов поиска */}
      {searchResults.map((result) => (
        <div key={result}>{result}</div>
      ))}
    </div>
  );
});

export default Search;
