import { useState } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, setCurrentDeckId, cardsForDeck }) {


  return (
    <div className="NewCardPage">
      <aside>
        <div className="NewCardPageDeck">
          <NewDeckForm decks={decks} addDeck={addDeck}/>
        </div>
        <div className="NewCardPageCard">
          <NewCardForm addCard={addCard} decks={decks}/>
        </div>
        <div>
          <DeckCardList cardsForDeck={cardsForDeck} />
        </div>
      </aside>
    </div>
  );
}