import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import "./DeckDetailPage.css"
import DeckCardList from "../../components/DeckCardList/DeckCardList";


export default function DeckDetailPage({  decks, updateCard, setCardsForDeck, cardsForDeck }) {
  const { deckId } = useParams();
  const [deck, setDeck ] = useState(null);

  console.log('decks before', decks, deckId)
  


  useEffect(() => {
    const deck = decks.find(deck => deck._id === deckId);
    setDeck(deck);
    setCardsForDeck(deck.cards);
  }, [deckId, cardsForDeck, setCardsForDeck]);
  
  if (!deck) return null;
  if (!decks) return null;
  

console.log('deck after', deck, cardsForDeck);


  return (
    <div className="DeckDetailPage">
      {!deckId ?  <div>"Loading.."</div>
      :  
        <div className="DeckDetails">
            <h2>{deck.name}</h2>
            <h4>Category: {deck.category}</h4>
            <h4>Subject: {deck.subject}</h4>
            <p>Created: {new Date(deck.createdAt).toLocaleDateString()}</p>
        </div>
      }
      <aside className="DeckDetailAside">
        <div className="scroll">
          <DeckCardList
          deck={deck} 
          cardsForDeck={cardsForDeck}
          updateCard={updateCard}
          setCardsForDeck={setCardsForDeck}
          />
        </div>
      </aside>
  
    </div>
  );
}
