import { useState } from 'react'

export default function DeckDropdownSelector({deckId, deckName, key, setCurrentDeckId}) {
  return (
    <option value="">{deckName} </option>
  )
}