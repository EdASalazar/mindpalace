export default function BoardDeck({ deck, setSelectedDeck }) {


  return (
    <li onClick={()=> setSelectedDeck(deck)}>{deck.name}</li>
  )
} 