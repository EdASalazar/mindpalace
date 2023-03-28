import DeckListPage from "../DeckListPage/DeckListPage";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
 

  return (
    <div className="BoardPage">
      <h4>Board Page</h4>
      <aside className="DeckListBoard">
      {decks.map((deck, idx) =>(
        <ul className="DeckItems" key={deck._idx} id={deck._idx} index={idx}>
          <li>{ deck.name }</li>
        </ul>
      ))}
      </aside>
    </div>
  )
} 