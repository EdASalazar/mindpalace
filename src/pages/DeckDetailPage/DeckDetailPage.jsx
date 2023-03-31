import { useParams } from "react-router-dom";
import { useState } from "react"
import "./DeckDetailPage.css"
import DeckCardList from "../../components/DeckCardList/DeckCardList";


export default function DeckDetailPage({ decks }) {
  const [detailId, setDetailId] = useState(null);
  const [cardUpdated, setCardUpdate] = useState(null)
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

      <aside >
        <div className="scroll">
          <DeckCardList cardsForDeck={deckCards} 
          setDetailId={setDetailId} 
          />
        </div>
      </aside>
    </div>
  );
}
