import "./DeckCardListItems.css"


export default function DeckCardListItem({sideOne, sideTwo, cardId, setDetailId, setCardUpdate,  setCardDelete  }) {
 

  return (
    <li onClick={()=>setDetailId(cardId)}>
        <span className="sideOne">
        Side One: {sideOne}  
        </span>
        <span className="sideTwo">
        Side Two: {sideTwo} 
        </span>
   </li>
  )
}