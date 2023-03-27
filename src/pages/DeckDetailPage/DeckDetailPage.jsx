import DeckCardList from "../../components/DeckCardList/DeckCardList";

export default function DeckDetailPage({ setActiveDeck, activeDeck, deckId, deckName, cardsForDeck }) {
  
   const CardsInDeck = cardsForDeck.map((card) => 
   <DeckCardList 
    sideOneWord={card.sideOneWord}
    sideTwoWord={card.sideTwoWord}
    key={card._id}
    deckName={deckName}
    deckId={deckId}
   />
   )
  
  return (
    <div className="DeckDetailPage" onClick={() => setActiveDeck(deckId)}>
      <h4>{activeDeck.name}</h4>
      <p>{deckId} </p>
      <ul>
       {CardsInDeck}
      </ul>
    </div>
  );
}
