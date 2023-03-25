import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewCardPage from '../NewCardPage/NewCardPage'
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DeckListPage from '../DeckListPage/DeckListPage';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import * as cardsAPI from '../../utilities/cards-api'
import * as decksAPI from '../../utilities/decks-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [cards, setCards] = useState([]);
  const [decks, setDecks] = useState([]);

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
    setDecks(decks);
  }
  getDecks();
}, []);

  // async (function() {
  //   async function getCards() {
  //     const cards = await cardsAPI.getAll();
  //     setCards(cards)
  //   }
  //   getCards();
  // }, []);

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/cards/new" element={<NewCardPage addCard={addCard} />} />
              <Route path="/decks" element={<DeckListPage decks={decks}/>} />
              <Route path="/decks/new" element={<NewDeckPage addDeck={addDeck}/>}/>
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
