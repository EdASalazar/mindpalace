import { useState, useEffect } from 'react'
import BoardDeck from '../../components/BoardDeck/BoardDeck';
import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
  const[selectedDeck, setSelectedDeck] = useState(decks[0]);
  const[answer, setAnswer] = useState({
    text: ""
  });
 

  const deckList = decks.map(deck => 
    <BoardDeck 
      key={deck._id}
      deck={deck}
      setSelectedDeck={setSelectedDeck}
    />
  );
  
  function handleChange(evt) {
    setAnswer({...answer, [evt.target.name]: evt.target.value})
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('submitted')
    // need to have one card
    // compare side two to the input
    // if correct increase card score by one
    // if wrong decrease it the score by one
    
  }

    

  return (
    <div className="BoardPage">
      <aside className="DeckListBoard">
        <ul>
            {deckList}
        </ul>
      </aside>
      <ul>
        {selectedDeck && <BoardPageCardDisplay cardsForBoard={selectedDeck.cards}/>}
      </ul>
      <div className="AnswerForm">
        <form action="">
          <input type="text" name="text" value={answer.text} onChange={handleChange}/>
          <button type='submit' onClick={handleSubmit}>Submit Answer</button>
        </form>
      </div>
    </div>
  )
} 