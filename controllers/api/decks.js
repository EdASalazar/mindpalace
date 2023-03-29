const User = require('../../models/user');
const Card = require('../../models/card')
const Deck =require('../../models/deck')

module.exports = {
  create,
  index,
  show,

};

async function index(req, res) {
  const decks = await Deck.find({user: req.user._id})
    .populate('cards').sort('-createdAt');
  res.json(decks)
}


async function show(req, res) {
  const cards = await Card.find({deck: req.params.id}).sort('-_id');
  console.log("after fetch cards", cards)
  res.json(cards)
}

async function create(req, res) {
  try {
    console.log("coming into create", req.body)
    req.body.user = req.user._id;
    const deck = await Deck.create(req.body);
    res.json(deck);
    console.log("deck after fetch", deck)
   
  } catch (err) {
    res.status(400).json(err)
  }
}

