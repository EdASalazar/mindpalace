import { useState, useEffect } from 'react'
import BoardDeckList from '../../components/BoardDeck/BoardDeck';
import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
  const[selectedDeck, setSelectedDeck] = useState(null)
  console.log("selected deck", selectedDeck)


  

  
  const deckList = decks.map(deck => 
    <BoardDeckList 
      key={deck._id}
      deck={deck}
      setSelectedDeck={setSelectedDeck}
    />
  )
    

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
    </div>
  )
} 