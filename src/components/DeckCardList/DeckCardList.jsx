import { useEffect, useState } from "react";
import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";
import './DeckCardList.css'

export default function DeckCardList({ cardsForDeck, updateCard, setCardsForDeck, }) {

//  console.log('list', cardsForDeck)


const cardList = cardsForDeck.map((card) =>
<DeckCardListItem 
        sideOne={card.sideOneWord} 
        sideTwo={card.sideTwoWord} 
        key={card._id}
        cardId={card._id}
        updateCard={updateCard}
        cardsForDeck={cardsForDeck}
        setCardsForDeck={setCardsForDeck}
        />);
        
        
if (!cardsForDeck) return null;

  return (
    <ul className="phraseList">
      {cardList}
    </ul>    
  )
}