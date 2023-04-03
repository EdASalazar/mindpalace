import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewCardPage from '../NewCardPage/NewCardPage'
import CardDetailPage from '../CardDetailPage/CardDetailPage';
import DeckListPage from '../DeckListPage/DeckListPage';
import DeckDetailPage from '../DeckDetailPage/DeckDetailPage'
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import * as cardsAPI from '../../utilities/cards-api'
import * as decksAPI from '../../utilities/decks-api'
import BoardPage from '../BoardPage/BoardPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [decks, setDecks] = useState([]);
  const [cardsForDeck, setCardsForDeck] = useState(null);
  const [cardsForCreate, setCardsForCreate] = useState(null);

async function updateCard(card) {
  const upDatedCard = await cardsAPI.update(card);
}


async function addCard(card) {
  const newCard = await cardsAPI.create(card);
};

async function addDeck(deck) {
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

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/cards/:cardId" element={<CardDetailPage addCard={addCard} decks={decks}/>} />
              <Route path="/cards/new" element={<NewCardPage 
                addCard={addCard} 
                addDeck={addDeck}
                updateCard={updateCard}
                setCardsForCreate={setCardsForCreate}
                cardsForCreate={cardsForCreate} 
                decks={decks} 
                />} 
              />
              <Route path="/decks/:deckId" element={<DeckDetailPage  
                updateCard={updateCard} 
                setCardsForDeck={setCardsForDeck} 
                decks={decks}
                cardsForDeck={cardsForDeck}  
                />}
              />
              <Route path="/decks" element={<DeckListPage decks={decks}/>} />
              <Route path="/board" element={<BoardPage decks={decks} />}/> 
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
