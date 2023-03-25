const User = require('../../models/user');
const Card = require('../../models/card')
const Deck =require('../../models/deck')

module.exports = {
  create,
};

async function create(req, res){
  try {
    console.log("coming into create", req.body)
    req.body.user = req.user._id;
    const deck = await Deck.create(req.body);
    res.json(deck);
   
  } catch (err) {
    res.status(400).json(err)
  }
}