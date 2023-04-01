import { useState } from "react";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, setCurrentDeckId }) {


  return (
    <div className="NewCardPage">
      <div className="NewCardPageDeck">
        <NewDeckForm decks={decks} addDeck={addDeck}/>
      </div>
      <div className="NewCardPageCard">
        <NewCardForm addCard={addCard} decks={decks}/>
      </div>
    </div>
  );
}