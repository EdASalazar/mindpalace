import { useEffect } from "react";
import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";
import './DeckCardList.css'

export default function DeckCardList({ cardsForDeck, 
  setDetailId, setCardUpdate, setCardsDeckDetail, updateCard }) {
 

  const cardList = cardsForDeck.map((card) =>
  <DeckCardListItem 
  sideOne={card.sideOneWord} 
  sideTwo={card.sideTwoWord} 
  key={card._id}
  cardId={card._id}
  cardsForDeck={cardsForDeck}
  setDetailId={setDetailId}
  setCardUpdate={setCardUpdate}
  setCardsDeckDetail={setCardsDeckDetail}
  updateCard={updateCard}
  />);

  

  return (
    <ul className="phraseList">
      {cardList}
    </ul>    
  )
}