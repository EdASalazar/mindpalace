import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewCardPage from '../NewCardPage/NewCardPage'
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DeckListPage from '../DeckListPage/DeckListPage';
import DeckDetailPage from '../DeckDetailPage/DeckDetailPage';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import * as cardsAPI from '../../utilities/cards-api'
import * as decksAPI from '../../utilities/decks-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [cards, setCards] = useState([]);
  const [decks, setDecks] = useState([]);
  const [activeDeck, setActiveDeck] = useState(null);
  const [cardsForDeck, setCardsForDeck] = useState([]);

  console.log("activeDeck at the use state", activeDeck)

async function addCard(card) {
  console.log("Card at app", card)
  const newCard = await cardsAPI.create(card);
  setCards([...cards, newCard])
};

async function addDeck(deck) {
  console.log("Deck at app", deck)
  const newDeck = await decksAPI.create(deck);
  setDecks([...decks, newDeck])
};

useEffect(function() {
  async function getDecks() {
    const decks = await decksAPI.getAllForUser();
    console.log("response at app getDecks", decks)
    setDecks(decks);
    if (decks.length) setActiveDeck(decks[0])
  }
  getDecks();
}, []);

useEffect(function() {
  if (!activeDeck) {
    console.log("No active deck")
  } else {
  async function getCards() {
    console.log("activeDeck._id ", activeDeck._id)
    const cards = await cardsAPI.getAllCardsForDeck(activeDeck._id);
    setCardsForDeck(cards);
  }
  getCards();
  }
}, [activeDeck]);




  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/cards/new" element={<NewCardPage addCard={addCard} decks={decks}/>} />
              <Route path="/cards/:id" element={<NewCardPage addCard={addCard} decks={decks}/>} />
              <Route path="/decks" element={<DeckListPage decks={decks} cardsForDeck={cardsForDeck} setActiveDeck={setActiveDeck}/>} />
              <Route path="/decks/new" element={<NewDeckPage addDeck={addDeck}/>}/>
              <Route path="/decks/:id" element={<DeckDetailPage setActiveDeck={setActiveDeck}/>}/>

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
