const User = require('../../models/user');
const Card = require('../../models/card');
const Deck =require('../../models/deck');

module.exports = {
  create,
  show,
};

async function create(req, res){
  try {
    console.log("coming into create", req.body)
    req.body.user = req.user._id;
    const newCard = await Card.create(req.body);
    console.log('newCard', newCard)
    const deck = await Deck.findById(newCard.deck);
    console.log('getting deck for card', deck)
    console.log('newCard._id', newCard._id)
    deck.card.push(newCard._id);
      deck.save();
    res.json(newCard);
  } catch (err) {
    res.status(400).json(err)
  }
}

async function show(req, res) {
  const card = await Card.find({_id: req.params.id});
  console.log("after fetch card", card)
  res.json(card)
}