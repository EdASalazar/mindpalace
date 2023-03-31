const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/decks'

// POST /api/decks (create a user - sign up)
router.post('/', decksCtrl.create)
// GET /api/
router.get('/', decksCtrl.index)
// GET /api/:id
router.get('/:id', decksCtrl.show)


module.exports = router;