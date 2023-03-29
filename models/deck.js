const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');
const card = require('./card')

// Trying to think ahead about what I might need down the road
// Debating about how I want to share decks. 

const deckSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category:  {
    type: String,
    required: true,
  },
  subject:  {
    type: String,
    required: true,
  },
  lastUsed: Date,
  timesUsed: Number,
   cards: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
   }],
   user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
   }
}, {
  timestamps: true
}
);

module.exports = mongoose.model('Deck', deckSchema)