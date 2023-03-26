import { set } from "mongoose";

export default function DeckDetailPage({ setActiveDeck, deckId, deckName, }) {
  
  
  return (
    <div className="DeckDetailPage" onClick={()=>setActiveDeck(deckId)}>
      <h4>{deckName}</h4>
      <p>{deckId}</p>
    </div>
  );
}
