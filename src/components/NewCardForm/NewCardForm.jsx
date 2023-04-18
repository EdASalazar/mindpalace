import { useState } from "react";
import './NewCardForm.css'

export default function NewCardPage({ addCard, decks, setDeckId, deckId }) {
  const [newCard, setNewCard] = useState({
    deck: "",
    sideOneWord: "",
    sideTwoWord: "",
    image: "",
    text: "",
  });

  function handleChange(evt) {
    setNewCard({ ...newCard, [evt.target.name]: evt.target.value });
  }

  setDeckId(newCard.deck)

  function handleSubmit(evt) {
    evt.preventDefault();
    addCard(newCard);
    setNewCard({
      deck: newCard.deck,
      sideOneWord: "",
      sideTwoWord: "",
      image: "",
      text: "",
    });

  }

  return (
    <form className="NewCardForm">

      {/*---- Select the deck you want to add the card to  */}

      <select name="deck" value={newCard.deck} onChange={handleChange}>
        <option value="null">Add A Trunk</option>
        {decks.map((deck) => (
          <option value={deck._id} key={deck._id} >
            {deck.name}
          </option>
        ))}
      </select>

      {/* --- form inputs for the flash card below -- */}
      {!deckId ? 
        <div>
            <h6>Choose A Trunk</h6>
        </div>
         :
        <div> 
          <input type="text"
            name="sideOneWord"
            placeholder="Question"
            value={newCard.sideOneWord}
            onChange={handleChange}
            autoFocus
            />
          <input type="text"
            name="sideTwoWord"
            placeholder="Answer"
            value={newCard.sideTwoWord}
            onChange={handleChange}
            />
          {/* add link for images below  */}

          {/* <input type="text" 
            name="image" 
            placeholder="Add link to an image..."
            value={newCard.image}
            onChange={handleChange}
          /> */}
      
          <button type="submit" onClick={handleSubmit}>Add A Tusk</button>
        </div>
      }
    </form>
  );
}