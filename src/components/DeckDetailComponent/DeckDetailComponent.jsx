export default function DeckDetailComponent({ deck }) {
  
  return (
    <div className="DeckDetailComponent">
        <h2>{deck.name}</h2>
        <p>Category: {deck.category}</p>
        <p>Subject: {deck.subject}</p>
        <p>Created: {new Date(deck.createdAt).toLocaleDateString()}</p>      
    </div>
  );
}
