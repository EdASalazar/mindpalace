import { Link } from "react-router-dom"
import "./DeckCardListItems.css"

export default function DeckCardListItem({sideOne, sideTwo, cardId}) {
  console.log('deck card list', sideOne)
  return (
    <li>
     <Link to={{ pathname: `/cards/${cardId}`}} >
        <span className="sideOne">
        Side One: {sideOne}  
        </span>
        <span className="sideTwo">
        Side Two: {sideTwo} 
        </span>
      </Link>
   </li>
  )
}