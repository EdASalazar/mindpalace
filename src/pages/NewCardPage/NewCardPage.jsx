import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, 
  setCardsForCreate, updateCard, cardsForCreate 
}) {
  const [deckId, setDeckId] = useState(decks[0]._id)

  useEffect(function() {
    async function getCards() {
      const deck = decks.filter(deck => deck._id === deckId);
      const deckArray = await deck[0];
      const cards =  await deckArray.cards;
      console.log('create cards', cards)
      setCardsForCreate(cards)
    };
    getCards();
  }, [deckId]);



  return (
    <div className="NewCardPage">
      <div className="NewCardPageAside">
          <h4>Add To Your Trunk:</h4>
          <NewDeckForm decks={decks} addDeck={addDeck}/>
          <NewCardForm addCard={addCard} 
          decks={decks} 
          setDeckId={setDeckId}
        />
      </div>
        <div className="NewCardPageCardList scroll">
          <DeckCardList           
          cardsForDeck={cardsForCreate} 
          updateCard={updateCard}  
          setCardsForDeck={setCardsForCreate}
          />
        </div>
    </div>
  );
}