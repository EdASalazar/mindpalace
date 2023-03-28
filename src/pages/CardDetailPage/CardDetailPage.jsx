import { useParams } from  "react-router-dom"
import { useState, useEffect } from "react";
import * as cardsAPI from '../../utilities/cards-api'

export default function CardDetailPage() {
  // const { cardId } = useParams();
  // const [cardDetail, setCardDetail] = useState(null);

  // useEffect(function() {
  //   if (!cardId) {
  //     console.log("No card chosen")
  //   } else {
  //   async function getCards() {
  //     const card = await cardsAPI.getCard(cardId);
  //     setCardDetail(card);
  //   }
  //   getCards();
  //   }
  // }, []);
  

  return (
    <p>Card Detail Page</p>
  )
}