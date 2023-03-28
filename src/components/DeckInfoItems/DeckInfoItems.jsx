import './DeckInfoItems.css'
import { Link } from 'react-router-dom'

export default function DeckInfoItems({ deckName, deckId, subject }) {
  return (
    <div className="DeckInfoItems">
      <Link to={{ pathname: `/decks/${deckId}`}} >
        <h4>{deckName}: {subject}</h4>
      </Link>
    </div>
  )

}