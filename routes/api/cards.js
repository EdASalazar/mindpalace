const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/cards'

// POST /api/cards (create a user - sign up)
router.post('/', cardsCtrl.create)
// GET /api/cards/:id (get cards for deck)
router.get('/:id', cardsCtrl.show)
// DELTE /api/card/:id
router.delete('/:id', cardsCtrl.deleteCard)


module.exports = router;