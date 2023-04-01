import sendRequest from "./send-request";
const BASE_URL = '/api/cards';

export async function create(newCard) {
  return sendRequest(BASE_URL, 'POST', newCard);
}

export async function update(updatedCard) {
  return sendRequest(BASE_URL, 'PUT', updatedCard);
}

export async function getCard(id) {
  return sendRequest(`${BASE_URL}/${id}`,);
}

export async function deleteCard(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
