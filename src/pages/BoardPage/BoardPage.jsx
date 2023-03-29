import { useState, useEffect } from 'react'
import BoardDeck from '../../components/BoardDeck/BoardDeck';
import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
  const[selectedDeck, setSelectedDeck] = useState(decks[0]);
  const[answer, setAnswer] = useState({
    text: ""
  });
  console.log("selected deck", selectedDeck);

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
          <button>Submit Answer</button>
        </form>
      </div>
    </div>
  )
} 