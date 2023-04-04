import { useState, useEffect } from "react"


export default function DeckDetailComponent({ deck }) {
  
  if (!deck) return <h1>Choose A Deck</h1>;

  return (
    <div className="DeckDetailComponent">
        <h2>{deck.name}</h2>
        <p>Category: {deck.category}</p>
        <p>Subject: {deck.subject}</p>
        <p>Created: {new Date(deck.createdAt).toLocaleDateString()}</p>      
    </div>
  );
}
