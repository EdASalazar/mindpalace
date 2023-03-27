import { useParams } from "react-router-dom";
import "./DeckDetailPage.css"

export default function DeckDetailPage({ setActiveDeck, decks}) {
  const { deckId } = useParams();
  const test = '641e8c94687f2d707f755e14';

  const deckDetail = decks.filter(deck => deck._id === test);
  const deckArray = deckDetail[0];
  console.log('deckId', deckId);
  console.log('deckDetailFilter', deckDetail);



  return (
    <div className="DeckDetailPage">
        <h1>{deckArray.name}</h1>
        <p>Date Created: {new Date(deckArray.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
