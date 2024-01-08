import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AddElementButton = observer (() => {
    const [elements, setElements] = useState([]);
    const [cards, setCards] = useState([]);

    const {object} = useContext(Context);

    const handleTermChange = (e) => {
        e.preventDefault();
        let index = e.target.className;
        console.log(e.target.className);
        console.log(e.target);
        console.log(e.target.value);
        cards[index].term = e.target.value;
        object.setCardSetsBuffer(cards);
        console.log(cards);
    }

    const handleDefinitionChange = (e) => {
        e.preventDefault();
        let index = e.target.className;
        console.log(e.target.className);
        console.log(e.target);
        console.log(e.target.value);
        cards[index].definition = e.target.value;
        object.setCardSetsBuffer(cards);
        console.log(cards);
    }

  const handleButtonClick = (e) => {
    e.preventDefault();
    const newElement = ( 
        <div>
            <div>
                Term
                <input 
                    type="text"
                    onChange={handleTermChange}
                    class={elements.length}
                >
                </input>
            </div>
            <div>
                Definition
                <input 
                    type="text"
                    onChange={handleDefinitionChange}
                    class={elements.length}
                >
                </input>
            </div>
        </div>    
    );
    setElements(prevElements => [...prevElements, newElement]);
    cards.push({
        term: '',
        definition: ''
    });
    setCards(cards);
    console.log(elements);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Add card</button>
      {elements.map((element, index) => (
        <p key={index}>{element}</p>
      ))}
    </div>
  );
});

export default AddElementButton;
