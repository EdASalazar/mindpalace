import { useState, useEffect } from 'react';
import BoardCardItem from "../BoardCardItem/BoardCardItem";
import "./BoardPageCardDisplay.css"

export default function BoardPageCardDisplay({ cardsForBoard }) {
  
  const cardInfo = cardsForBoard.map((card) => 
  <BoardCardItem 
  sideOne={card.sideOneWord}
  sideTwo={card.sideTwoWord}
  key={card._id} 
  />);

  // const cardInfo = cardsForBoard.map((card) => 
  // <BoardCardItem 
  // sideOne={card.sideOneWord}
  // sideTwo={card.sideTwoWord}
  // key={card._id} 
  // />);
  console.log("BoardPageCardDisplay cardInfo", cardInfo)

  return (
    <div className="BoardPageCardDisplay">
      {cardInfo}
      <BoardCardItem cardInfo /> 
    </div>


  )
}