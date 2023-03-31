import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import "./DeckDetailPage.css"
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import * as cardsAPI from '../../utilities/cards-api'

export default function DeckDetailPage({ decks, setCards, cards}) {
  const [detailId, setDetailId] = useState(null);
  const [cardUpdate, setCardUpdate] = useState(null)
  const { deckId } = useParams();

  const deckDetail = decks.filter(deck => deck._id === deckId);
  const deckArray = deckDetail[0];
  const deckCards = deckArray.cards;


  const cardDetail = deckCards.filter(card => card._id === detailId);




  return (
    <div className="DeckDetailPage">
      <div className="DeckDetails">
        <h2>{deckArray.name}</h2>
        <h4>Catagory: {deckArray.category}</h4>
        <h4>Subject {deckArray.subject}</h4>
        <p>Created: {new Date(deckArray.createdAt).toLocaleDateString()}</p>
      </div>

      <aside>
      <h2>Phrases:</h2>
         <DeckCardList cardsForDeck={deckCards} 
         setDetailId={setDetailId} 
         setCards={setCards}
         cards={cards}
         />
      </aside>
    </div>
  );
}
