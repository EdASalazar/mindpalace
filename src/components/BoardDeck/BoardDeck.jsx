import "./BoardDeck.css";

export default function BoardDeck({ deck, setSelectedDeck }) {

  return (
    <li id="BoardDeck" onClick={()=> setSelectedDeck(deck)}>{deck.name}</li>
  )
} 