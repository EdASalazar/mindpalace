import "./DeckCardListItems.css";
import { useState, useEffect } from 'react';
import * as cardsAPI from "../../utilities/cards-api"


export default function DeckCardListItem({  
  sideOne, sideTwo, cardId, key, updateCard, setCardsForDeck, cardsForDeck
 }) {

const [submitButton, setSubmitButton] = useState(false)
const [deleteCard, setDeleteCard] = useState(false)
const [editCardId, setEditCardId] = useState(null)
const [editCard, setEditCard] = useState({
  id: "",
  sideOneWord: "",
  sideTwoWord: "",
});

async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
  
async function deleteACard(id) {
  const deletedCard = await cardsAPI.deleteCard(id);
  const cards =  cardsForDeck.filter(card => card._id !== deletedCard._id);
  // console.log('deleted cards', cards)
  setCardsForDeck(cards);
}; 

function handleChange(evt) {
  setEditCard({...editCard, [evt.target.name]: evt.target.value})
};


function handleDeleteButton(evt) {
  evt.preventDefault();
  async function deleteButtonStatus(){
    setDeleteCard(true);
    await sleep(2);
    setDeleteCard(false);
  }
  deleteButtonStatus();
}

function handleEditButton(id) {
  setEditCardId(id);
  setSubmitButton(true);
  setEditCard({
    id: cardId,
    sideOneWord: sideOne,
    sideTwoWord: sideTwo,
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  updateCard(editCard)
  setSubmitButton(false);
  setEditCard({
    _id: "",
    sideOneWord: "",
    sideTwoWord: "",
  })
}

  return (
    <li>
      <form action="">
        <div className="sideOne">
        {submitButton ? <input 
        type="text" 
        name="sideOneWord"
        value={editCard.sideOneWord}
        onChange={handleChange}
        />
        :
        <div>Side One: {sideOne}</div> } 
        </div>
        <div className="sideTwo">
        
        {submitButton ? <input 
        type="text"
        name="sideTwoWord"
        value={editCard.sideTwoWord}
        onChange={handleChange} 
        />
        : 
        <div>Side Two: {sideTwo} </div> } 
        </div>
        {submitButton && 
          <button className="DeckCardListItemUpdate" value="cardId" onClick={handleSubmit}>
            Submit
          </button> 
          }
        </form>
        {!submitButton && 
          <button className="DeckCardListItemUpdate" value="cardId" onClick={() => handleEditButton(cardId)}>
            Edit
          </button> 
     
        }

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