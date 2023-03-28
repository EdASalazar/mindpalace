import { set } from 'mongoose';
import { useState} from 'react'
import BoardDeckList from '../../components/BoardDeckList/BoardDeckList';
import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
  const[selectedDeck, setSelectedDeck] = useState(null)
const deckList = decks.map(deck => 
<BoardDeckList 
deckName={deck.name} 
deckId={deck._id} 
key={deck._id}
setSelectedDeck={setSelectedDeck}/>)

  return (
    <div className="BoardPage">
      <aside className="DeckListBoard">
        <ul>
            {deckList}
        </ul>
      </aside>
      <ul>
        <BoardPageCardDisplay  decks={decks}/>
      </ul>
    </div>
  )
} 