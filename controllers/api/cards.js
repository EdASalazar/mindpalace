const User = require('../../models/user');
const Card = require('../../models/card');
const Deck =require('../../models/deck');

module.exports = {
  create,
  show,
  deleteCard,
  update
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

function deleteCard(req, res) {
  console.log('controller', req.params.id)
  Card.findById(req.params.id)
      .then(function (card) {
          card.deleteOne();
          res.json(card)
      });
}

// async function update(req, res) {
//   console.log("controller update", req.body)
//   Card.findOneAndUpdate({_id: req.body.id}),
//     req.body,
//     {new: true}
// }

// async function update(req, res) {
//   console.log("controller update", req.body)
//   const card = await Card.find({_id: req.body.id}),
//     req.body,
//     {new: true}
// }

// function update(req, res) {
//     id = req.body.id;
//     const card = Card.findOne(card => card._id === id);
//     console.log("update CARD", card)
//   }

async function update(req, res) {
  id = req.body.id;
  console.log("controller update", id)
  const card = await Card.findById(id);
  console.log("control", card.sideOneWord)
  card.sideOneWord = req.body.sideOneWord;
  card.sideTwoWord = req.body.sideOneWord;
  card.save()
  res.json(card)
  console.log('after edit card', card)
  }