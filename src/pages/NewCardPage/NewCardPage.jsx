import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, 
  setCardsForCreate, updateCard, cardsForCreate 
}) {
  const [deckId, setDeckId] = useState(decks[2]._id)
  console.log("deckId", deckId)
  const deck = decks.filter(deck => deck._id === deckId);
  console.log('deck', deck)
  const deckArray = deck[0];
  console.log('deckArray', deckArray)
  const cards = deckArray.cards[0];
  console.log('create cards', cards, deckArray)
  setCardsForCreate(cards)
  console.log('what Im sending',cardsForCreate)


  // useEffect(function() {
  //   async function getCards() {
  //   };
  //   getCards();
  // }, [deckId]);



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
        {/* <div className="NewCardPageCardList scroll">
          <DeckCardList           
          cardsForDeck={cardsForCreate} 
          updateCard={updateCard}  
          setCardsForDeck={setCardsForCreate}
          />
        </div> */}
    </div>
  );
}