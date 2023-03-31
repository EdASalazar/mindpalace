import "./DeckCardListItems.css"
import * as cardsAPI from "../../utilities/cards-api"


export default function DeckCardListItem({  
  sideOne, sideTwo, cardId, setDetailId, 
  setCardUpdate,
 }) {
  
async function deleteACard(id) {
  const deletedCard = await cardsAPI.deleteCard(id);
} 



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
        <button className="DeckCardListItemDelete"  onClick={() => deleteACard(cardId)}>Delete</button>
      </div>
    </>
  )
}