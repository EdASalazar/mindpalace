import "./BoardCardItem.css"

export default function BoardCardItem({ sideOne, sideTwo, cardInfo }) {
  
  return(
    <div className="FlashCard">
      <div className="FlashCardSideOne">
        {sideOne}
      </div>
      <div className="FlashCardSideTwo">
        {sideTwo}
      </div>
      
    </div>
  )
}