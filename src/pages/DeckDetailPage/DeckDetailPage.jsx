import DeckCardList from "../../components/DeckCardList/DeckCardList";
import { useParams } from "react-router-dom";
import "./DeckDetailPage.css"

export default function DeckDetailPage({ setActiveDeck, decks}) {
  const { linkId } = useParams();
  // const deckDetail = decks.filter(deck => deck._id === linkId);




  return (
    <div className="DeckDetailPage">

    </div>
  );
}
