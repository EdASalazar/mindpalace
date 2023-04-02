import { useState } from "react";
import DeckCardList from "../../components/DeckCardList/DeckCardList";
import NewCardForm from "../../components/NewCardForm/NewCardForm"
import NewDeckForm from "../../components/NewDeckForm/NewDeckForm";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, addDeck, 
  cardsDeckDetail, setDetailId, setCardsDeckDetail, updateCard 
}) {


  return (
    <div className="NewCardPage">
      <div className="NewCardPageAside">
          <h4>Add To Your Trunk:</h4>
          <NewDeckForm decks={decks} addDeck={addDeck}/>
          <NewCardForm addCard={addCard} decks={decks} setDetailId={setDetailId}/>
      </div>
        <div className="NewCardPageCardList scroll">
          <DeckCardList           
          cardsForDeck={cardsDeckDetail} 
          setDetailId={setDetailId}
          setCardsDeckDetail={setCardsDeckDetail}
          updateCard={updateCard}  
          />
        </div>
    </div>
  );
}