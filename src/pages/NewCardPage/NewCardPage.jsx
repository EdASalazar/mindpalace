import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import DeckDetailComponent from "../../components/DeckDetailComponent/DeckDetailComponent";
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

  if (!decks) return <h1>Waiting For the Pack</h1>;


  return (
    <div className="NewCardPage">
      <div id="NewCardPageAside" className="NewCardPageAside">
          <NewCardForm addCard={addCard} 
            decks={decks} 
            setDeckId={setDeckId}
            /> 
      
        {!deck ?
        <NewDeckForm decks={decks} addDeck={addDeck}/>
        :
        <ul><DeckDetailComponent deck={deck}/></ul>
        
      }
      </div>
        <div className="NewCardPageCardList scroll">
      {!deck ? <h4>Added A Trunk</h4> 
       :
          <DeckCardList
            deck={deck}           
            cardsForDeck={cardsForDeck} 
            updateCard={updateCard}  
            setCardsForDeck={setCardsForDeck}
          />
        }
        </div>
    </div>
  );
}