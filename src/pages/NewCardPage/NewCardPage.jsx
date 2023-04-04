import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, 
  setCardsForDeck, updateCard, cardsForDeck 
}) {
  const [deck, setDeck ] = useState(null);
  const [deckId, setDeckId] = useState(null);

  useEffect(function() {
    async function getCards() {
      const deck = decks.find(deck => deck._id === deckId);
      setDeck(deck);
      setCardsForDeck(deck.cards);
      console.log('this function runs!');
    };
    getCards();
  }, [deckId, decks, cardsForDeck, setCardsForDeck]);

  if (!decks) return null;


  return (
    <div className="NewCardPage">
      <div id="NewCardPageAside" className="NewCardPageAside">
          <NewDeckForm decks={decks} addDeck={addDeck}/>
          <NewCardForm addCard={addCard} 
            decks={decks} 
            setDeckId={setDeckId}
        />
      </div>
        <div className="NewCardPageCardList scroll">
          <DeckCardList
            deck={deck}           
            cardsForDeck={cardsForDeck} 
            updateCard={updateCard}  
            setCardsForDeck={setCardsForDeck}
          />
        </div>
    </div>
  );
}