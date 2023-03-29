import { useEffect } from "react";
import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";
import './DeckCardList.css'

export default function DeckCardList({ cardsForDeck }) {
 

  const cardList = cardsForDeck.map((card) =>
  <DeckCardListItem 
  sideOne={card.sideOneWord} 
  sideTwo={card.sideTwoWord} 
  key={card._id}
  cardId={card._id}
  />);

  

  return (
    <ul className="phraseList">
      {cardList}
    </ul>    
  )
}