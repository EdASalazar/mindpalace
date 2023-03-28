import BoardPageCardDisplay from "../../components/BoardPageCardDisplay/BoardPageCardDisplay";
import DeckListPage from "../DeckListPage/DeckListPage";
import "./BoardPage.css"

export default function BoardPage({ decks }) {
 console.log('decks', decks)

  return (
    <div className="BoardPage">
      <aside className="DeckListBoard">
      {decks.map((deck, idx) =>(
        <ul className="DeckItems" key={deck._idx} id={deck._idx} index={idx} cards={deck.card}>
          <li>{ deck.name }</li>
        </ul>
      ))}
      </aside>
      <ul>
        <BoardPageCardDisplay decks/>
      </ul>
    </div>
  )
} 