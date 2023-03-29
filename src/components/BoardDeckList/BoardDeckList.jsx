export default function BoardDeckList({ deckName, deckId, setSelectedDeck }) {
 
  function handleClick() {
  setSelectedDeck(deckId)
};

  return (
    <li onClick={handleClick}>{deckName}</li>
  )
} 