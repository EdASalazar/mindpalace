export default function DeckCardList({sideOneWord, sideTwoWord, deckName, deckId  }) {
  return (
   <div>
     <h4>Deck Card List</h4>
       <p>{deckName}</p>
       <p>{sideOneWord}</p>
       <p>{sideTwoWord}</p>
       <p>{deckId}</p>


   </div> 

    
  )
}