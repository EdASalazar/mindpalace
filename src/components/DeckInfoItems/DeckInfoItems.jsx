import './DeckInfoItems.css'
import { Link } from 'react-router-dom'

export default function DeckInfoItems({ deckName, deckId, category, subject }) {
  return (
    <div className="DeckInfoItems">
      <Link to={{ pathname: `/decks/${deckId}`}} >
        <h4>{deckName}</h4>
        <p>{category}</p>
        <p>{subject}</p>
      </Link>
    </div>
  )

}