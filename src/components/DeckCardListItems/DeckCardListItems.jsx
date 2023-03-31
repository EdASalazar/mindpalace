import "./DeckCardListItems.css";
import { useState } from 'react';
import * as cardsAPI from "../../utilities/cards-api"


export default function DeckCardListItem({  
  sideOne, sideTwo, cardId, setDetailId, 
  setCardUpdate, setCardsDeckDetail, cardsForDeck,
 }) {
  
const [editId, setEditId] = useState(null)
const [deleteCard, setDeleteCard] = useState(false)
const [editCard, setEditCard] = useState({
  sideOneWord: "",
  sideTwoWord: "",
});

async function sleep(seconds) {
  return new Promise((resolve) =>setTimeout(resolve, seconds * 1000));
  }
  

async function getEditedCard(editId) {
  const card = await cardsForDeck.filter(card => card._id === editId);
  setEditCard(card)
}

async function deleteACard(id) {
  const deletedCard = await cardsAPI.deleteCard(id);
  const cards = await cardsForDeck.filter(card => card._id !== id);
  setCardsDeckDetail(cards);
}; 

function handleChange(evt) {
  setEditCard({...editCard, [evt.target.name]: evt.target.value})
};


function handleClick(){

  setEditId(null);
  
}

function handleSubmit(evt) {
  evt.preventDefault();
  setEditId(null);
}

function handleDeleteButton(evt) {
  evt.preventDefault();
  async function deleteButtonStatus(){
    setDeleteCard(true)
    await sleep(2)
    setDeleteCard(false)
  }
  deleteButtonStatus()
}


  return (
    <li onClick={()=>setDetailId(cardId)}>
      <form action="">
        <div className="sideOne">
        {editId === cardId ? <input type=" " />
        :
        <div>Side One: {sideOne}</div> } 
        </div>
        <div className="sideTwo">
        
        {editId === cardId ? <input type=" " />
        : 
        <div>Side Two: {sideTwo} </div> } 
        </div>
        
        {!editId ? 
          <button className="DeckCardListItemUpdate" onClick={() => setEditId(cardId)}>
            Update
          </button> 
          :
          <button className="DeckCardListItemUpdate" onClick={handleSubmit}>
            Submit
          </button> 
        }

      </form>
      <div className="DeckCardListItemButtons"> 
      {!deleteCard ?
        <button className="DeckCardListItemDelete"  onClick={handleDeleteButton}>
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