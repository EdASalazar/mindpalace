import { useState } from 'react'

export default function NewDeck() {
const [newDeck, setNewDeck] = useState({
  name: "",
})

function handleChange(evt) {
  setNewDeck({...newDeck, [evt.target.name]: evt.target.value})
}

function handleSubmit(evt) {
  evt.preventDefault();
}


  return (
    <div className="NewDeck">
      <h1>Add A New Deck</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        name="text"
        value={newDeck.text}
        onChange={handleChange}
        />
        <button type='submit'>Add A Deck</button>
      </form>

    </div>
  )
  
}