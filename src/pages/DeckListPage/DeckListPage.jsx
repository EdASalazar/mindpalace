import { useState } from 'react'
import DeckDetail from '../../components/DeckDetail/DeckDetail'

export default function DeckListPage({ decks }) {
const [activeDeck, setActiveDeck] = useState(null);

const deckList = decks.map((deck, idx) => 
<DeckDetail 
deckId={deck._id}
user={deck.user}
deckName={deck.name}
key={idx}
setActiveDeck={setActiveDeck}
/>)
console.log('DeckList', deckList)
  return (
    <div className="DeckListPage">
    </div>

  );
}