import { useState, useEffect } from 'react';
import BoardCardItem from "../BoardCardItem/BoardCardItem";
import "./BoardPageCardDisplay.css"

export default function BoardPageCardDisplay({ cardsForBoard, setSkip }) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(1)
  const[answer, setAnswer] = useState({
    text: "",
  });
  
  
  const cardInfo = cardsForBoard.slice(i,j).map((card) => 
  <BoardCardItem 
  sideOne={card.sideOneWord}
  sideTwo={card.sideTwoWord}
  card={card.card}
  key={card._id} 
  setI={setI}
  setJ={setJ}
  i={i}
  j={j}
  answer={answer}
  setAnswer={setAnswer}
  length={cardsForBoard.length}
  setSkip={setSkip}
  />);


    




    
  return (
    <div className="BoardPageCardDisplay">
      {cardInfo}
    </div>
  )
}