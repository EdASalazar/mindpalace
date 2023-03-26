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
    const card = await Card.create(req.body);
    res.json(card);
   
  } catch (err) {
    res.status(400).json(err)
  }
}

async function show(req, res) {
  console.log("contr going in", req.params.id)
  const cards = await Card.find({deck: req.params.id});
  console.log("after fetch cards", cards)
  res.json(cards)
}