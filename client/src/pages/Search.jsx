import React, { useState, useContext } from 'react';
import { Context } from '../index';
import {observer} from 'mobx-react-lite';
import { makeStyles} from '@material-ui/core';
import useSharedStyles from './useSharedStyles';

const useStyles = makeStyles((theme) => ({
   
}))

const Search = observer(() => {
  const classes = useStyles();
  const sharedClasses = useSharedStyles();

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
    <div className={sharedClasses.wrapper}>
        <div className={sharedClasses.container}>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={searchQuery} onChange={handleInputChange} />
                <button type="submit">Search</button>
            </form>

            {/* Отображение результатов поиска */}
            {searchResults.map((result) => (
                <div key={result}>{result}</div>
            ))}
        </div>
      
    </div>
  );
});

export default Search;
