import { useState, useEffect } from 'react';
import BoardCardItem from "../BoardCardItem/BoardCardItem";
import "./BoardPageCardDisplay.css"

export default function BoardPageCardDisplay({ cardsForBoard }) {

  const cardInfo = cardsForBoard.map((card) => 
  <BoardCardItem 
  sideOne={card.sideOneWord}
  sideTwo={card.sideTwoWord}
  card={card.card}
  key={card._id} 
  />);
 console.log("2", cardsForBoard)
 const [c0, c1, ...rest] = cardsForBoard;
 console.log("c2", c2)
    
  return (
    <div className="BoardPageCardDisplay">
      {cardInfo}
    </div>


  )
}