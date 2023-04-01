import { useState } from 'react'
import "./NewDeckForm.css"

export default function NewDeckForm({ addDeck }) {
const [newDeck, setNewDeck] = useState({
  name: "",
  category: "",
  subject: "",
})

function handleChange(evt) {
  setNewDeck({...newDeck, [evt.target.name]: evt.target.value})
}

function handleSubmit(evt) {
  evt.preventDefault();
  addDeck(newDeck);
  setNewDeck({
    name: "",
    category: "",
    subject: "",
    });
  }



  return (
    <div className="NewDeck">
      <h1>Add A New Trunk</h1>
      <form onSubmit={handleSubmit} className="NewDeckForm">
        
        <input type="text" 
        name="name"
        placeholder='Name...'
        value={newDeck.name}
        onChange={handleChange}
        />

        <input type="text" 
        name="category"
        placeholder='Category...'
        value={newDeck.category}
        onChange={handleChange}
        />

        <input type="text" 
        name="subject"
        placeholder='Subject...'
        value={newDeck.subject}
        onChange={handleChange}
        />

        <button type='submit'>Add A Trunk</button>
      </form>

    </div>
  )
  
}