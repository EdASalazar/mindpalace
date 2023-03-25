const User = require('../../models/user');
const Card = require('../../models/card')

module.exports = {
  create,
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