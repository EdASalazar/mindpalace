import { useState, useEffect } from 'react'
import * as cardsAPI from '../../utilities/cards-api'
import DeckInfoItems from '../../components/DeckInfoItems/DeckInfoItems';

export default function DeckListPage({ decks, setActiveDeck, cardsForDeck }) {

const deckList = decks.map((deck, idx) => 
<DeckInfoItems 
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
    </div>

  );
}