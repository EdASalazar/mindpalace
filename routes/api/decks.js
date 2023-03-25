const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/cards'

// POST /api/decks (create a user - sign up)
router.post('/', decksCtrl.create)


module.exports = router;