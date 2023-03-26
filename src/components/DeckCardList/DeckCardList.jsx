export default function DeckCardList({sideOneWord, sideTwoWord, deckName, deckId  }) {
  return (
        <li> {deckName}: {sideOneWord}:{sideTwoWord}</li>
  )
}