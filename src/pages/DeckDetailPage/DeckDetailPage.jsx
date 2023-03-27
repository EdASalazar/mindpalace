import { useParams } from "react-router-dom";
import "./DeckDetailPage.css"

export default function DeckDetailPage({ setActiveDeck, decks}) {
  const { deckId } = useParams();
  console.log('deckId', deckId)
  const deckDetail = decks.filter(deck => deck._id === deckId);
  console.log('deckDetailFilter', deckDetail)



  return (
    <div className="DeckDetailPage">

    </div>
  );
}
