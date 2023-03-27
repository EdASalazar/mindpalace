import { useEffect } from "react";
import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";

export default function DeckCardList({ cardsForDeck }) {
 const card = cardsForDeck.map(card =>
  <DeckCardListItem sideOne={sideOneWord} sideTwo={sideTwoWord} />)


  return (
    <div>
      <h1>Deck Card List</h1>

        <ul>
          
        </ul>

    </div>
        
  )
}