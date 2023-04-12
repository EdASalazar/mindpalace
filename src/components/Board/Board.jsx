import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import "./Board.css"

export default function Board({ deck }) {
  
  return (
    <div className="BoardPage">
      <div className="FlashCardForm">
        {deck && <BoardPageCardDisplay cardsForBoard={deck.cards}/>}
      </div>
    </div>
  )
} 