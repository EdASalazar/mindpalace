const User = require('../../models/user');
const Card = require('../../models/note');

module.exports = {
  create,
};

async function create(req, res){
  try {
    req.body.user = req.user._id;
    const card = await Card.create(req.body)
    res.json(card);
    console.log(card)
  } catch (err) {
    res.status(400).json(err)
  }
}