import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewCardPage from '../NewCardPage/NewCardPage'
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import * as cardsAPI from '../../utilities/cards-api'
import * as decksAPI from '../../utilities/decks-api'


export default function App() {
  const [user, setUser] = useState(getUser());
  const [decks, setDecks] = useState([]);
  const [cardsForDeck, setCardsForDeck] = useState(null);

  async function updateCard(cardData) {
    cardsAPI.update(cardData);
    const cards = cardsForDeck.filter(card => card._id !== cardData._id);
    setCardsForDeck(cards)
  };


  async function addCard(card) {
    const newCard = await cardsAPI.create(card);
    setCardsForDeck([...cardsForDeck, newCard])
  };

  async function addDeck(deck) {
    const newDeck = await decksAPI.create(deck);
    setDecks([...decks, newDeck])
  };

  useEffect(function() {
    async function getDecks() {
      if (!user) {
        console.log('loading ')
      } else {
        const decks = await decksAPI.getAllForUser();
        setDecks(decks);
      }
    }
    getDecks();
  }, [user, cardsForDeck, setDecks]);

  return (
    <main className="App">
      { user ?  
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<NewCardPage 
                addCard={addCard} 
                addDeck={addDeck}
                updateCard={updateCard}
                setCardsForDeck={setCardsForDeck} 
                decks={decks}
                cardsForDeck={cardsForDeck} 
                />} 
              />
              <Route page="*" element={<Navigate to="/"/>} />
            </Routes>
          </>
      
          : 
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
