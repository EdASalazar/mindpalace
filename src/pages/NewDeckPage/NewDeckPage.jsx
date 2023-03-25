import { useState } from 'react'

export default function NewDeck() {
const [newDeck, setNewDeck] = useState(null)

function handleChange(evt) {
  setNewDeck({...newDeck, [evt.target.name]: evt.target.value})
}


  return (
    <div className="NewDeck">
      <h1>Add a New Deck</h1>
      <form action="">
        <input type="text" />
      </form>

    </div>
  )
  
}