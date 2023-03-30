import "./DeckCardListItems.css"


export default function DeckCardListItem({sideOne, sideTwo, cardId, setDetailId, setCardUpdate,  setCardDelete  }) {
 

  return (
    <>
      <li onClick={()=>setDetailId(cardId)}>
        <div className="sideOne">
        Side One: {sideOne}  
        </div>
        <div className="sideTwo">
        Side Two: {sideTwo} 
        </div>
      </li>
      <div className="DeckCardListItemButtons"> 
        <button className="DeckCardListItemUpdate" onClick={() => setCardUpdate(cardId)}>Update</button> 
        <button className="DeckCardListItemDelete"  onClick={() => setCardDelete(cardId)}>Delete</button>
      </div>
    </>
  )
}