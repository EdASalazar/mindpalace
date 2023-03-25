import { useState } from "react";
import DeckDropdownSelector from "../../components/DeckDropdownSelector/DeckDropdownSelector";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks }) {
  const [currentDeckId, setCurrentDeckId] = useState(null)

  const deckChoices = decks.map((deck, idx) =>
   <DeckDropdownSelector 
   deckName={deck.name} 
   key={idx} 
   deckId={deck._id}
   setCurrentDeckId={setCurrentDeckId}
   /> );

  const [newCard, setNewCard] = useState({
    sideOneWord: "",
    sideTwoWord: "",
    image:"",
    text: "",
    
  });

  function handleChange(evt) {
    setNewCard({...newCard, [evt.target.name]: evt.target.value})
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addCard(newCard);
    setNewCard({
      sideOneWord: "",
      sideTwoWord: "",
      image:"",
      text: "",
    });

  }

  return (
    <div className="NewCardPage">
      <h4>Add A Card</h4>
      <form className="NewCardForm" onSubmit={handleSubmit}>
      {/*---- Select the deck you want to add the card to  */}
      <select name="" id="">
              {deckChoices}
      </select>
      {/* --- form inputs for the flash card below -- */}

        <input type="text" 
        name="sideOneWord" 
        placeholder="Side One Phrase..."
        value={newCard.sideOneWord}
        onChange={handleChange}
        />
        <input type="text" 
        name="sideTwoWord" 
        placeholder="Side Two Phrase..."
        value={newCard.sideTwoWord}
        onChange={handleChange}
        />
        <input type="text" 
        name="image" 
        placeholder="Add link to an image..."
        value={newCard.image}
        onChange={handleChange}
        />
        <button type="submit">Add A Card</button>
      </form>
    </div>
  );
}