import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, 
  setCardsForDeck, updateCard, cardsForDeck 
}) {


  const [deckId, setDeckId] = useState(null);

  useEffect(function() {
    async function getCards() {
      const deck = decks.filter(deck => deck._id === deckId);
      const deckArray = await deck[0];
      const cards = await deckArray.cards;
      setCardsForDeck(cards);
      console.log('this function runs!');
    };
    getCards();
  }, [deckId, decks, cardsForDeck, setCardsForDeck, updateCard]);

  if (!decks) return null;


  return (
    <div className="NewCardPage">
      <div className="NewCardPageAside">
          <NewDeckForm decks={decks} addDeck={addDeck}/>
          <NewCardForm addCard={addCard} 
            decks={decks} 
            setDeckId={setDeckId}
        />
      </div>
        <div className="NewCardPageCardList scroll">
          <DeckCardList           
            cardsForDeck={cardsForDeck} 
            updateCard={updateCard}  
            setCardsForDeck={setCardsForDeck}
          />
        </div>
    </div>
  );
}