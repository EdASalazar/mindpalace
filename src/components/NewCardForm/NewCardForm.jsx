import { useState } from "react";
import './NewCardForm.css'

export default function NewCardPage({ addCard, decks, setDeckId }) {
  const [newCard, setNewCard] = useState({
    deck: "",
    sideOneWord: "",
    sideTwoWord: "",
    image:"",
    text: "",
  });

  

  function handleChange(evt) {
    setNewCard({...newCard, [evt.target.name]: evt.target.value});
  }
  
  setDeckId(newCard.deck)
  console.log(newCard.deck)

  function handleSubmit(evt) {
    evt.preventDefault();
    addCard(newCard);
    setNewCard({
      deck: newCard.deck,
      sideOneWord: "",
      sideTwoWord: "",
      image:"",
      text: "",
    });

  }

  return (
      <form className="NewCardForm">
     
      {/*---- Select the deck you want to add the card to  */}
     
     <select name="deck" value={newCard.deck} onChange={handleChange}>
       <option value="null">Add A Trunk</option>
        {decks.map((deck)=>(
          <option value={deck._id} key={deck._id} >
            {deck.name} {deck._id}
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
        <button type="submit" onClick={handleSubmit}>Add A Tusk</button>
      </form>
  );
}