import { useState, useEffect } from 'react'
import DeckDetail from '../DeckDetailPage/DeckDetailPage'
import * as cardsAPI from '../../utilities/cards-api'

export default function DeckListPage({ decks, setActiveDeck, cardsForDeck }) {

const deckList = decks.map((deck, idx) => 
<DeckDetail 
deckId={deck._id}
user={deck.user}
deckName={deck.name}
key={idx}
setActiveDeck={setActiveDeck}
cardsForDeck={cardsForDeck}
/>)


  return (
    <div className="DeckListPage">
      {deckList}
      {/* {DeckDetail} */}
    </div>

  );
}