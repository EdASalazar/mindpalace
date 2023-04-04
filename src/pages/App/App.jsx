import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewCardPage from '../NewCardPage/NewCardPage'
import CardDetailPage from '../CardDetailPage/CardDetailPage';
import DeckListPage from '../DeckListPage/DeckListPage';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import * as cardsAPI from '../../utilities/cards-api'
import * as decksAPI from '../../utilities/decks-api'
import BoardPage from '../BoardPage/BoardPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [decks, setDecks] = useState([]);
  const [cardsForDeck, setCardsForDeck] = useState(null);

async function updateCard(cardData) {
  const upDatedCard = await cardsAPI.update(cardData);
  // const cards = cardsForDeck.filter(card => card._id !== cardData._id)
  // console.log('cards app', upDatedCard, cards)
  // setCardsForDeck(...cards, upDatedCard)

};


async function addCard(card) {
  const newCard = await cardsAPI.create(card);
  // setCardsForDeck(...cardsForDeck, newCard)
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
}, [user]);



  return (
    <main className="App">
      { user ?  
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/cards/:cardId" element={<CardDetailPage addCard={addCard} decks={decks}/>} />
              <Route path="/" element={<NewCardPage 
                addCard={addCard} 
                addDeck={addDeck}
                updateCard={updateCard}
                setCardsForDeck={setCardsForDeck} 
                decks={decks}
                cardsForDeck={cardsForDeck} 
                />} 
              />
              <Route path="/decks" element={<DeckListPage decks={decks}/>} />
              <Route path="/board" element={<BoardPage decks={decks} />}/>
              <Route page="*" element={<Navigate to="/board"/>} />
            </Routes>
          </>
      
          : 
          <AuthPage setUser={setUser} />

      }
    </main>
  );
}
