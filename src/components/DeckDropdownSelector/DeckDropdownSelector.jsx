import { useState } from 'react'

export default function DeckDropdownSelector({deckId, deckName, setCurrentDeckId}) {
  return (
    <option value={deckId}>{deckName}</option>
  )
}