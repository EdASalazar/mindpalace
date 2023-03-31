import { useParams } from  "react-router-dom"
import { useState, useEffect } from "react";
import * as cardsAPI from '../../utilities/cards-api'

export default function CardDetailPage() {
  const { cardId } = useParams();
  const [cardDetail, setCardDetail] = useState(null);
  let cardArr = "";
 
 useEffect(function() {
if (!cardDetail) {
    console.log('no Card Selected')
} else {
  cardArr = cardDetail[0]
}
}); 


  useEffect(function() {
    if (!cardId) {
      console.log("No card chosen")
    } else {
    async function getCard() {
      const card = await cardsAPI.getCard(cardId);
      setCardDetail(card);
    }
    getCard();
    }
  }, []);


  return (
    <div className="CardDetailPage">
      <p>Card Detail Page</p>
      {!cardArr ? <div>"No Card Selected"</div> : 

      <ul>
        <li>
          {cardArr.sideOneWord}
        </li>
        <li>
          {cardArr.sideTwoWord}
        </li>
      </ul>
      }
       
    </div>
  )
}