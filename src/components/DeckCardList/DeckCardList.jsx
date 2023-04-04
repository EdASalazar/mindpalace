import DeckCardListItem from "../DeckCardListItems/DeckCardListItems";
import './DeckCardList.css'

export default function DeckCardList({ deck, cardsForDeck, updateCard, setCardsForDeck, }) {
 

  if (!cardsForDeck) return <h1>Choose A Trunk</h1>;

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


  return (
    <ul className="phraseList scrolly">
      {cardList}
    </ul>    
  )
}