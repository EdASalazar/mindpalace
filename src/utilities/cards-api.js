import sendRequest from "./send-request";
const BASE_URL = '/api/cards';

export async function create(newCard) {
  console.log("newCard at API", newCard)
  return sendRequest(BASE_URL, 'POST', newCard)
}