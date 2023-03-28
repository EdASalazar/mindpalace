import { Link } from "react-router-dom"
import "./DeckCardListItems.css"

export default function DeckCardListItem({sideOne, sideTwo, cardList}) {
  console.log('deck card list', sideOne)
  return (
    <li>
      <span className="sideOne">
        {sideOne}  
      </span>
      <span className="sideTwo">
        {sideTwo} 
      </span>
   </li>
  )
}