import "./DeckCardListItems.css";
import { useState } from 'react';
import * as cardsAPI from "../../utilities/cards-api"


export default function DeckCardListItem({  
  sideOne, sideTwo, cardId, setDetailId, 
  setCardUpdate, setCardsDeckDetail, cardsForDeck,
 }) {
  
const [edit, setEdit] = useState(false)
const [deleteCard, setDeleteCard] = useState(false)

async function deleteACard(id) {
  const deletedCard = await cardsAPI.deleteCard(id);
  const cards = await cardsForDeck.filter(card => card._id !== id);
  setCardsDeckDetail(cards)
} 



  return (
    <li onClick={()=>setDetailId(cardId)}>
      <form action="">
        <div className="sideOne">
        Side One: {sideOne}  
        </div>
        <div className="sideTwo">
        Side Two: {sideTwo} 
        </div>
      </form>
      <div className="DeckCardListItemButtons"> 
      {!edit ? 
        <button className="DeckCardListItemUpdate" onClick={() => setEdit(true)}>
          Update
        </button> 
        :
        <button className="DeckCardListItemUpdate" onClick={() => setCardUpdate(cardId)}>
          Submit
        </button> 

      }
      {!deleteCard ?
        <button className="DeckCardListItemDelete"  onClick={() => setDeleteCard(true)}>
          Delete
        </button>
        :
        <button className="DeckCardListItemDelete"  onClick={() => deleteACard(cardId)}>
          Confirm
        </button>
      }  
      </div>
    </li>
  )
}