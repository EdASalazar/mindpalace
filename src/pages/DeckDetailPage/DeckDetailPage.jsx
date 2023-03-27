import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./DeckDetailPage.css"
import * as cardsAPI from '../../utilities/cards-api'
import DeckCardList from "../../components/DeckCardList/DeckCardList";

export default function DeckDetailPage({ setActiveDeck, decks}) {
  const [cards, setCards] = useState([]);
  const [cardsForDeck, setCardsForDeck] = useState([]);
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


  useEffect(function() {
    if (!test) {
      console.log("No deck chosen")
    } else {
    async function getCards() {
      // using "test" for the id so I can move forward 
      const cards = await cardsAPI.getAllCardsForDeck(test);
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
        <ul>
         <DeckCardList />
        </ul>
      </aside>
    </div>
  );
}
