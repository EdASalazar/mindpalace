import { useState } from 'react'
import BoardDeck from '../../components/BoardDeck/BoardDeck';
import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
  const[selectedDeck, setSelectedDeck] = useState(decks[0]);
 
  const deckList = decks.map(deck => 
    <BoardDeck 
      key={deck._id}
      deck={deck}
      setSelectedDeck={setSelectedDeck}
    />
  );
  
  return (
    <div className="BoardPage">
      <aside className="DeckListBoard">
        <ul>
            {deckList}
        </ul>
      </aside>
      <div className="FlashCardForm">
        {!selectedDeck && "Select A Trunk "}
        {selectedDeck && <BoardPageCardDisplay cardsForBoard={selectedDeck.cards}/>}
      </div>
    </div>
  )
} 