import sendRequest from "./send-request";
const BASE_URL = '/api/cards';

export async function create(newCard) {
  return sendRequest(BASE_URL, 'POST', newCard);
}

export async function update(updatedCard) {
  return sendRequest(BASE_URL, 'PUT', updatedCard);
}

export async function getCard(id) {
  // console.log("id at cards-api", id);
  return sendRequest(`${BASE_URL}/${id}`,);
}

export async function deleteCard(id) {
  console.log("id at cards-api", id);
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
