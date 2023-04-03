import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import "./DeckDetailPage.css"
import DeckCardList from "../../components/DeckCardList/DeckCardList";


export default function DeckDetailPage({  decks, updateCard, setCardsForDeck, cardsForDeck }) {
  const { deckId } = useParams();
  const [deckArray, setDeckArray ] = useState(null);
  
useEffect(() => {
  const deck = decks.filter(deck => deck._id === deckId);
  const deckArray = deck[0];
  const cards =  deckArray.cards;
  setDeckArray(deckArray);
  setCardsForDeck(cards);
}, [deckId, decks, setCardsForDeck, updateCard]);

if (!deckArray) return null;
if (!decks) return null;

  return (
    <div className="DeckDetailPage">
      {!deckId ?  <div>"Loading.."</div>
      :  
        <div className="DeckDetails">
            <h2>{deckArray.name}</h2>
            <h4>Category: {deckArray.category}</h4>
            <h4>Subject: {deckArray.subject}</h4>
            <p>Created: {new Date(deckArray.createdAt).toLocaleDateString()}</p>
        </div>
      }
      <aside className="DeckDetailAside">
        <div className="scroll">
          <DeckCardList 
          cardsForDeck={cardsForDeck}
          updateCard={updateCard}
          setCardsForDeck={setCardsForDeck}
          />
        </div>
      </aside>
  
    </div>
  );
}
