import { useState } from 'react'
import NewDeckForm from '../../components/NewDeckForm/NewDeckForm'
import "./NewDeckPage.css"

export default function NewDeck({ addDeck }) {

  return (
    <div className="NewDeck">
        <NewDeckForm addDeck={addDeck}/>
    </div>
  )
  
}