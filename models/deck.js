const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');
const card = require('./card')

// Trying to think ahead about what I might need down the road
// Debating about how I want to share decks. 

const deckSchema = new Schema({
  name: String,
  catagory: String,
  subject: String,
  lastUsed: Date,
  timesUsed: Number,
   card: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
   }],
   user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
   }
}, {
  timestamps: true
}
);

module.export = mongoose.model('Deck', deckSchema)