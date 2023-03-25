import { useState } from "react";
import './NewCard.css'

export default function NewCardPage({ newCard }) {
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