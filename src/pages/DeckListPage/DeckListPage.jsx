import { useState, useEffect } from 'react'
import DeckDetail from '../../components/DeckDetail/DeckDetail'

export default function DeckListPage({ decks }) {
const [activeDeck, setActiveDeck] = useState(null);
const [cardsForDeck, setCardsForDeck] = useState([]);

const deckList = decks.map((deck, idx) => 
<DeckDetail 
deckId={deck._id}
user={deck.user}
deckName={deck.name}
key={idx}
setActiveDeck={setActiveDeck}
cardsForDeck={cardsForDeck}
/>)

useEffect(function() {
  async function getCards() {
    const cards = await cardsAPI.getAllForDeck(activeDeck);
    setCardsForDeck(cards);
  }
  getCards();
}, [activeDeck]);


console.log('DeckList', deckList)
  return (
    <div className="DeckListPage">
      {deckList}
      {DeckDetail}
    </div>

  );
}