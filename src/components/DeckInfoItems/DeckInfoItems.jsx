import './DeckInfoItems.css'

export default function DeckInfoItems({ deckName, }) {
  return (
    <div className="DeckInfoItems">
      <h1>{deckName}</h1>
      <p>More inormation about the deck</p>
    </div>
  )

}