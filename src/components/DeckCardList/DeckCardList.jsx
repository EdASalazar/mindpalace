import { useEffect } from "react";
import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";
import './DeckCardList.css'

export default function DeckCardList({ cardsForDeck, 
  setDetailId, setCardUpdate, setCards, cards, removeCard }) {
 
  console.log('cards list', cards)
  const cardList = cardsForDeck.map((card) =>
  <DeckCardListItem 
  sideOne={card.sideOneWord} 
  sideTwo={card.sideTwoWord} 
  key={card._id}
  cardId={card._id}
  cardsForDeck={cardsForDeck}
  setDetailId={setDetailId}
  setCardUpdate={setCardUpdate}
  setCards={setCards}
  cards={cards} 
  removeCard={removeCard}
  />);

  

  return (
    <ul className="phraseList">
      {cardList}
    </ul>    
  )
}