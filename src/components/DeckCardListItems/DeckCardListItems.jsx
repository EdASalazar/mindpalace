export default function DeckCardListItem({sideOne, sideTwo, cardList}) {
  console.log('deck card list', sideOne)
  return (
    <li>
    {sideOne} : {sideTwo} 
   </li>
  )
}