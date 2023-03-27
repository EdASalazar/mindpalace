import { useState, useEffect } from 'react'
import * as cardsAPI from '../../utilities/cards-api'
import DeckInfoItems from '../../components/DeckInfoItems/DeckInfoItems';

export default function DeckListPage({ decks }) {

const deckList = decks.map((deck, idx) => 
<DeckInfoItems 
deckId={deck._id}
user={deck.user}
deckName={deck.name}
key={deck._id}
/>)


  return (
    <div className="DeckListPage">
      {deckList}
    </div>

  );
}