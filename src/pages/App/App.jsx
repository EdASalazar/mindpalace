import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewCardPage from '../NewCardPage/NewCardPage'
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DeckListPage from '../DeckListPage/DeckListPage';
import DeckDetailPage from '../DeckDetailPage/DeckDetailPage'
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import * as cardsAPI from '../../utilities/cards-api'
import * as decksAPI from '../../utilities/decks-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [cards, setCards] = useState([]);
  const [decks, setDecks] = useState([]);
  const [activeDeck, setActiveDeck] = useState(null);
  const [cardsForDeck, setCardsForDeck] = useState(null);

  // console.log("activeDeck at the use state", activeDeck)

async function addCard(card) {
  // console.log("Card at app", card)
  const newCard = await cardsAPI.create(card);
  setCards([...cards, newCard])
};

async function addDeck(deck) {
  // console.log("Deck at app", deck)
  const newDeck = await decksAPI.create(deck);
  setDecks([...decks, newDeck])
};

useEffect(function() {
  async function getDecks() {
    const decks = await decksAPI.getAllForUser();
    // console.log("response at app getDecks", decks)
    setDecks(decks);
    if (decks.length) setActiveDeck(decks[0])
  }
  getDecks();
}, []);



  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}

              <Route path="/cards/new" element={<NewCardPage addCard={addCard} decks={decks}/>} />
              <Route path="/cards/:cardId" element={<NewCardPage addCard={addCard} decks={decks}/>} />
              <Route path="/decks/:deckId" element={<DeckDetailPage decks={decks}/>}/>
              <Route path="/decks" element={<DeckListPage decks={decks} cardsForDeck={cardsForDeck}/>} />
              <Route path="/decks/new" element={<NewDeckPage addDeck={addDeck}/>}/>

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
