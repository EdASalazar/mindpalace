import { useParams } from "react-router-dom";
import "./DeckDetailPage.css"
import DeckCardList from "../../components/DeckCardList/DeckCardList";

export default function DeckDetailPage({ decks }) {
  const { deckId } = useParams();

  const deckDetail = decks.filter(deck => deck._id === deckId);
  const deckArray = deckDetail[0];
  const deckCards = deckArray.cards;

  return (
    <div className="DeckDetailPage">
      <div className="DeckDetails">
        <h2>{deckArray.name}</h2>
        <h4>{deckArray.category}</h4>
        <h4>{deckArray.subject}</h4>
        <p>Created: {new Date(deckArray.createdAt).toLocaleDateString()}</p>
      </div>
      <aside>
      <h2>Phrases:</h2>
         <DeckCardList cardsForDeck={deckCards}/>
      </aside>
    </div>
  );
}
