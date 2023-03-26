import { useState } from "react";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks, setCurrentDeckId }) {
  const [currentDeckDropDown, setCurrentDeckDropDown] = useState('');
  let deckValue = [currentDeckDropDown][0]

  const [newCard, setNewCard] = useState({
    sideOneWord: "",
    sideTwoWord: "",
    image:"",
    text: "",
    deck: deckValue,
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
     
     <select name="deck" value={currentDeckDropDown} onChange={(e) => setCurrentDeckDropDown(e.target.value)}>
        <option value="">Select A Deck</option>
        {decks.map((deck)=>(
          <option value={deck._id} key={deck._id} >
            {deck.name}
          </option>
        ))}
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