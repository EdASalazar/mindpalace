import { set } from "mongoose";
import DeckCardList from "../DeckCardList/DeckCardList";

export default function DeckDetail({ setActiveDeck, deckId, deckName, cardsForDeck }) {
   const CardsInDeck = cardsForDeck.map((card, idx) => 
   <DeckCardList 
    sideOneWord={card.sideOneWord}
    sideTwoWord={card.sideTwoWord}
    key={idx}
   />
   )
  
  return (
    <div className="DeckDetailPage" onClick={() => setActiveDeck(deckId)}>
      <h4>{deckName}</h4>
      <p>{deckId} </p>
      {CardsInDeck}
    </div>
  );
}
