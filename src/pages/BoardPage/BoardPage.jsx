import { useState} from 'react'
import BoardDeckList from '../../components/BoardDeckList/BoardDeckList';
import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
  const[selectedDeck, setSelectedDeck] = useState(null)
  const deck = decks.filter(deck => deck._id === selectedDeck)
  

  const deckList = decks.map(deck => 
  <BoardDeckList 
  deckName={deck.name} 
  deckId={deck._id} 
  key={deck._id}
  decks={decks}
  deck={deck}
  setSelectedDeck={setSelectedDeck}/>)

  // const reviewDeck = decks.filter()

  return (
    <div className="BoardPage">
      <aside className="DeckListBoard">
        <ul>
            {deckList}
        </ul>
      </aside>
      <ul>
        <BoardPageCardDisplay  decks={decks} deck={deck}/>
      </ul>
    </div>
  )
} 