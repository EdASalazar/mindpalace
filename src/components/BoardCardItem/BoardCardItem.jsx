export default function BoardCardItem({ sideOne, sideTwo }) {
  
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