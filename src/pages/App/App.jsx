import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewCardPage from '../NewCardPage/NewCardPage'
import CardDecks from '../CardDecks/CardDecks';
import NavBar from '../../components/NavBar/NavBar';
import * as cardsAPI from '../../utilities/cards-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [cards, setCards] = useState([]);

async function addCard(card) {
  const newCard = await cardsAPI.create(card);
  setCards([...cards, newCard])
};



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
              <Route path="/decks" element={<CardDecks />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
