import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, 
  setCardsForDeck, updateCard, cardsForDeck 
}) {
  const [deckId, setDeckId] = useState(decks[2]._id)
  console.log("deckId", deckId)
  const deck = decks.filter(deck => deck._id === deckId);
  console.log('deck', deck)
  const deckArray = deck[0];
  console.log('deckArray', deckArray)
  const cards = deckArray.cards[0];
  console.log('create cards', cards, deckArray)
  setCardsForDeck(cards)
  console.log('what Im sending',cardsForDeck)


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
          cardsForDeck={cardsForDeck} 
          updateCard={updateCard}  
          setCardsForDeck={setCardsForDeck}
          />
        </div> */}
    </div>
  );
}