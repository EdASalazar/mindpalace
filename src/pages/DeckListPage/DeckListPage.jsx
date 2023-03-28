import DeckInfoItems from '../../components/DeckInfoItems/DeckInfoItems';

export default function DeckListPage({ decks }) {

const deckList = decks.map((deck, idx) => 
<DeckInfoItems 
deckId={deck._id}
user={deck.user}
deckName={deck.name}
category={deck.category}
subject={deck.subject}
key={deck._id}
/>)


  return (
    <div className="DeckListPage">
      {deckList}
    </div>

  );
}