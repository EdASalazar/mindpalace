import { useState } from "react";

export default function NewCardPage() {
  const [newCard, setNewCard] =useState({});

  function handleChange(evt) {
    setNewCard({...newCard, [evt.target.name]: evt.targe.value})
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    // Baby steps
    console.log(newCard);
    alert({newCard})
  }

  return (
    <div className="NewCardPage">
      <h4>Add A Card</h4>
      <form action="submit" className="NewCardForm" onSubmit={handleSubmit}>
        <input type="text" 
        name="sideOneWord" 
        value={newCard.text}
        placeholder="Side One Phrase..."
        onChange={handleChange}
        />
        <button type="submit">Add A Card</button>
      </form>
    </div>
  );
}