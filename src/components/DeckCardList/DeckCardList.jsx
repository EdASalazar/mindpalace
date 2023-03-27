import { useEffect } from "react";
import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";

export default function DeckCardList({ cardsForDeck }) {

  const card = cardsForDeck.map(function(card){
  <DeckCardListItem sideOne={card.sideOneWord} sideTwo={card.sideTwoWord} />})
    
  
  // function cardCheck(){
  //   if (!cardsForDeck) {
  //     console.log("no cards here")
  //   } else {
  //     const cardForList = cardsForDeck.map(card =>
  //      <DeckCardListItem sideOne={sideOneWord} sideTwo={sideTwoWord} />)
  //     console.log("cards here")
  //   }
  // }
  // cardCheck()


  return (
    <div>
      <h1>Deck Card List</h1>
          {/* {!cardsForDeck ? 'Loading...' : {cards}} */}
        <ul>
          {card}
        </ul>

    </div>
        
  )
}