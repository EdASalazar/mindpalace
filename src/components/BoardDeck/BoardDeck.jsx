export default function BoardDeckList({ deck, setSelectedDeck }) {


  return (
    <li onClick={()=> setSelectedDeck(deck)}>{deck.name}</li>
  )
} 