import { useState, useEffect } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import DeckDetailComponent from "../../components/DeckDetailComponent/DeckDetailComponent";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import Board from "../../components/Board/Board"
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck,
  setCardsForDeck, updateCard, cardsForDeck, setDeck, deck, deckId, setDeckId,
}) {

  const [boardVisible, setBoardVisible] = useState(false);

  useEffect(function () {
    async function getCards() {
      const deckDetail = await decks.find(deck => deck._id === deckId);
      setDeck(deckDetail);
      if (deckDetail) {
        setCardsForDeck(deckDetail.cards);
      }
    };
    getCards();
  }, [deckId, decks, setDeck, setCardsForDeck]);


  return (
    <div className="NewCardPage">
      <div id="NewCardPageAside" className="NewCardPageAside">
        <NewCardForm addCard={addCard}
          decks={decks}
          setDeckId={setDeckId}
          deckId={deckId}
        />

        <div className="NewCardPageDeckDetail">
          {!deck ?
            <NewDeckForm decks={decks} addDeck={addDeck} deck={deck}/>
            :
            <div className="DeckDetailUl">
              <ul className="DeckDetailUl"><DeckDetailComponent deck={deck} /></ul>
              {!boardVisible ?
                <button onClick={() => setBoardVisible(true)}>Practice</button>
                :
                <button onClick={() => setBoardVisible(false)}>Manage</button>
              }
            </div>
          }
        </div>
      </div>

      {!boardVisible ?
        <div className="NewCardPageCardList scrolly">
          {!deck ?
            <div className="NewCardCPageInstructions">
              <h4>Welcome to Elephluent flahscards. </h4>
              <label>
                Let's start your learning journey by creating a "Trunk".
              </label>
              <ol>
                <li className="NewCardPageInstructionLi">
                  Add the name you want to give the trunk.
                </li>
                <li className="NewCardPageInstructionLi">
                  Add a category to your trunk.
                </li>
                <li className="NewCardPageInstructionLi">
                  Add a subject to your trunk.
                </li>
                <li className="NewCardPageInstructionLi">
                  Click the "Add A Trunk" button.
                </li>
                <li className="NewCardPageInstructionLi">
                  Then select the trunk you just created from the drop down menu and start adding "Tusks".
                </li>
              </ol>
            </div>

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
          <Board deck={deck} />
        </div>
      }
    </div>
  );
}