import { useEffect } from "react";
import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";
import './DeckCardList.css'

export default function DeckCardList({ cardsForDeck, setDetailId, setCardUpdate }) {
 

  const cardList = cardsForDeck.map((card) =>
  <DeckCardListItem 
  sideOne={card.sideOneWord} 
  sideTwo={card.sideTwoWord} 
  key={card._id}
  cardId={card._id}
  cards={cardsForDeck}
  setDetailId={setDetailId}
  setCardUpdate={setCardUpdate}
  setCards={setCards} 
  />);

  

  return (
    <ul className="phraseList">
      {cardList}
    </ul>    
  )
}