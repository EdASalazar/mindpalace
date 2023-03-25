import sendRequest from "./send-request";
const BASE_URL = '/api/decks';

export async function create(newDeck) {
  console.log("newDeck at API", newDeck)
  return sendRequest(BASE_URL, 'POST', newDeck)
}