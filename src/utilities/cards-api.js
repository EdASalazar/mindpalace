import sendRequest from "./send-request";
const BASE_URL = '/api/cards';

export async function create(newCard) {
  return sendRequest(BASE_URL, 'POST', newCard)
}

export async function getAllForDeck(deckId) {
  console.log("getCards at card-api", deckId)
  return sendRequest(BASE_URL, 'GET', deckId)
}