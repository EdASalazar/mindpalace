export default function BoardDeckList({decks, deck,
  deckName, deckId, setSelectedDeck }) {
  console.log("deck on list", deck);
  if (!deck) {
    console.log("no deck on list")
  } else {
    
    console.log("deck on list", deck)
  };
  


  



  function handleClick() {
  setSelectedDeck(deckId)
};

  return (
    <li onClick={handleClick}>{deckName}</li>
  )
} 