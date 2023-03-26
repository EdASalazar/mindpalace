

export default function DeckListPage({ decks }) {
 console.log("DeckListPage", decks)
 
  return (
    <div className="DeckListPage">
      {decks.map((deck, idx) =>(
        <div className="DeckItems" key={idx}>
          <h2>{ deck.name }</h2>
          <p>{deck._id}</p>
          <p>{deck.user}</p>
        </div>
      ))}
    </div>

  );
}