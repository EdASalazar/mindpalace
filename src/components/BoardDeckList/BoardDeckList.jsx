export default function BoardDeckList({decks, deckName, deckId, setSelectedDeck }) {

  function handleClick() {
  setSelectedDeck(deckId)
}

  return (
    <li onClick={handleClick}>{deckName}</li>
  )
}