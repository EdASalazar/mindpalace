const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/decks'

// POST /api/decks (create a user - sign up)
router.post('/', ensureLoggedIn, decksCtrl.create)
// GET /api/
router.get('/',  ensureLoggedIn, decksCtrl.index)
// GET /api/:id
router.get('/:id',  ensureLoggedIn, decksCtrl.show)


module.exports = router;