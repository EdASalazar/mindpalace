const User = require('../../models/user');
const Card = require('../../models/card');
const Deck =require('../../models/deck');

module.exports = {
  create,
  show,
};

async function create(req, res){
  try {
    req.body.user = req.user._id;
    const newCard = await Card.create(req.body);
    const deck = await Deck.findById(newCard.deck);
    deck.cards.push(newCard._id);
      deck.save();
    res.json(newCard);
  } catch (err) {
    res.status(400).json(err)
  }
}

async function show(req, res) {
  const card = await Card.find({_id: req.params.id});
  res.json(card)
}