import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import DeckDetailComponent from "../../components/DeckDetailComponent/DeckDetailComponent";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import Board from  "../../components/Board/Board"
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, 
  setCardsForDeck, updateCard, cardsForDeck 
}) {

  const [deck, setDeck ] = useState(null);
  const [deckId, setDeckId] = useState(null);
  const [boardVisible, setBoardVisible] = useState(false);

  useEffect(function() {
    async function getCards() {
      const deckDetail = await decks.find(deck => deck._id === deckId);
      setDeck(deckDetail);
      if (deckDetail) {
        setCardsForDeck(deckDetail.cards);
      }
    };
    getCards();
  }, [deckId]);

  return (
    <div className="NewCardPage">
      <div id="NewCardPageAside" className="NewCardPageAside">
          <NewCardForm addCard={addCard} 
            decks={decks} 
            setDeckId={setDeckId}
            /> 
        <div className="NewCardPageDeckDetail">
          {!deck ?
            <NewDeckForm decks={decks} addDeck={addDeck}/>
            :
            <div className="DeckDetailUl">
              <ul className="DeckDetailUl"><DeckDetailComponent deck={deck}/></ul>
              {!boardVisible ?
                <button onClick={()=> setBoardVisible(true)}>Practice</button>
                :
                <button onClick={()=> setBoardVisible(false)}>Manage</button>
              }
            </div>
          }
        </div>
      </div>

      {!boardVisible ?
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
        :
        <div className="NewCardPageBoard">
          <Board deck={deck}/>
        </div>
      }
    </div>
  );
}