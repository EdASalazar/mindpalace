import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./DeckDetailPage.css"
import * as decksAPI from '../../utilities/decks-api'
import DeckCardList from "../../components/DeckCardList/DeckCardList";

export default function DeckDetailPage({ decks }) {
  const [cardsForDeck, setCardsForDeck] = useState([]);
  const { deckId } = useParams();

  const deckDetail = decks.filter(deck => deck._id === deckId);
  const deckArray = deckDetail[0];

  useEffect(function() {
    if (!deckId) {
      console.log("No deck chosen")
    } else {
    async function getCards() {
      const cards = await decksAPI.getAllCardsForDeck(deckId);
      setCardsForDeck(cards);
    }
    getCards();
    }
  }, []);
  
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
         <DeckCardList cardsForDeck={cardsForDeck}/>
      </aside>
    </div>
  );
}
