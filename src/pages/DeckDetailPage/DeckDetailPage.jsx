import { useParams } from "react-router-dom";
import "./DeckDetailPage.css"

export default function DeckDetailPage({ setActiveDeck, decks}) {
  const { deckId } = useParams();
  // hard coding the user id until I figure out 
  // what the issue is with useParams
  const test = '641e8c94687f2d707f755e14';

  const deckDetail = decks.filter(deck => deck._id === test);
  const deckArray = deckDetail[0];
  console.log('deckId', deckId);
  console.log('deckDetailFilter', deckDetail);
  // this will fetch the cards for the deck selected
  // test will change the user id
  setActiveDeck(test)


  return (
    <div className="DeckDetailPage">
        <h1>{deckArray.name}</h1>
        <p>Date Created: {new Date(deckArray.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
