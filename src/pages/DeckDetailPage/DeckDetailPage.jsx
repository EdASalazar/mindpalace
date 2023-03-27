import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./DeckDetailPage.css"
import * as cardsAPI from '../../utilities/cards-api'
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
      const cards = await cardsAPI.getAllCardsForDeck(deckId);
      setCardsForDeck(cards);
    }
    getCards();
    }
  }, []);
  
  return (
    <div className="DeckDetailPage">
      <div className="DeckDetails">
        <h1>{deckArray.name}</h1>
        <p>Date Created: {new Date(deckArray.createdAt).toLocaleDateString()}</p>
      </div>
      <aside>
      <h1>Phrases:</h1>
         <DeckCardList cardsForDeck={cardsForDeck}/>
      </aside>
    </div>
  );
}
