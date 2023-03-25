import { useState } from "react";
import DeckDropdownSelector from "../../components/DeckDropdownSelector/DeckDropdownSelector";
import './NewCardPage.css'

export default function NewCardPage({ addCard, decks }) {
  const [currentDeckId, setCurrentDeckId] = useState(decks[0]._id);

  // const deckChoices = decks.map((deck, idx) =>
  //  <DeckDropdownSelector 
  //  deckName={deck.name} 
  //  deckId={deck._id}
  //  setCurrentDeckId={setCurrentDeckId}
  //  key={deck._id}
  //  /> );

  const [newCard, setNewCard] = useState({
    sideOneWord: "",
    sideTwoWord: "",
    image:"",
    text: "",
    deck: {currentDeckId},
    
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
      {/* <select value={selected} onChange={(e) => setCurrentDeckId(e.target.value)}>
              {deckChoices}
      </select> */}
      {/* --- form inputs for the flash card below -- */}

      <select value={currentDeckId} onChange={(e) => setCurrentDeckId(e.target.value)}>
        {decks.map((deck)=>(
          <option value={deck._id} key={deck._id}>
            {deck.name}
          </option>
        ))}

      </select>


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