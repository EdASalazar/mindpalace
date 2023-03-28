import sendRequest from "./send-request";
const BASE_URL = '/api/decks';

export async function create(newDeck) {
  return sendRequest(BASE_URL, 'POST', newDeck)
}

export async function getAllForUser() {
  return sendRequest(BASE_URL);
}

export async function getAllCardsForDeck(id) {
  // console.log("id at cards-api", id);
  return sendRequest(`${BASE_URL}/${id}`);
}
