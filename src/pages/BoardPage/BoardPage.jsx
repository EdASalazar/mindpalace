import { useState, useEffect } from 'react'
import BoardDeckList from '../../components/BoardDeckList/BoardDeckList';
import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./BoardPage.css"
import * as decksAPI from '../../utilities/decks-api'

export default function BoardPage({ decks }) {
  const[selectedDeck, setSelectedDeck] = useState(decks[0]._id)
  const[cardsForBoard, setCardsForBoard] = useState(null)
  const deck = decks.filter(deck => deck._id === selectedDeck)
  console.log("selected deck", selectedDeck)
  
  useEffect(function() {
    if (!selectedDeck) {
      console.log("No deck chosen")
    } else {
      async function getCards() {
        const cards = await decksAPI.getAllCardsForDeck(selectedDeck);
        console.log("board page cards", cards)
        setCardsForBoard(cards);
      }
      getCards();
    }
  }, [selectedDeck]);
  
  
  const deckList = decks.map(deck => 
    <BoardDeckList 
    deckName={deck.name} 
    deckId={deck._id} 
    key={deck._id}
    decks={decks}
    deck={deck}
    setSelectedDeck={setSelectedDeck}/>)
   

  return (
    <div className="BoardPage">
      <aside className="DeckListBoard">
        <ul>
            {deckList}
        </ul>
      </aside>
      <ul>
        <BoardPageCardDisplay  decks={decks} deck={deck} cardsForBoard={cardsForBoard}/>
      </ul>
    </div>
  )
} 