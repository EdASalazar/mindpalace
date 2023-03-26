import DeckCardList from "../DeckCardList/DeckCardList";

export default function DeckDetail({ setActiveDeck, deckId, deckName, cardsForDeck }) {
  
   const CardsInDeck = cardsForDeck.map((card, idx) => 
   <DeckCardList 
    sideOneWord={card.sideOneWord}
    sideTwoWord={card.sideTwoWord}
    key={idx}
    deckName={deckName}
    deckId={deckId}
   />
   )
  
  return (
    <div className="DeckDetail" onClick={() => setActiveDeck(deckId)}>
      <h4>{deckName}</h4>
      <p>{deckId} </p>
      {CardsInDeck}
    </div>
  );
}
