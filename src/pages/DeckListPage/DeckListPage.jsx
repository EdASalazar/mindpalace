import { useState, useEffect } from 'react'
import DeckDetail from '../../components/DeckDetail/DeckDetail'
import * as cardsAPI from '../../utilities/cards-api'

export default function DeckListPage({ decks }) {
const [activeDeck, setActiveDeck] = useState(decks[0]._id);
const [cardsForDeck, setCardsForDeck] = useState();
const deckId = [activeDeck][0]

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
    const cards = await cardsAPI.getAllForDeck(deckId);
    setCardsForDeck(cards);
  }
  getCards();
}, [activeDeck]);


  return (
    <div className="DeckListPage">
      {deckList}
      {DeckDetail}
    </div>

  );
}