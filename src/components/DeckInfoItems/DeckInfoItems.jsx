import './DeckInfoItems.css'
import { Link } from 'react-router-dom'

export default function DeckInfoItems({ deckName, deckId }) {
  return (
    <div className="DeckInfoItems">
      <Link to={{ pathname: `/decks/${deckId}`}} >
        <h1>{deckName}</h1>
        <p>More information about the deck</p>
      </Link>
    </div>
  )

}