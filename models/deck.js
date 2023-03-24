const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Trying to think ahead about what I might need down the road
// Debating about how I want to share decks. 

const deckSchema = new Schema({
  name: {
    type: String,
    require: true
  }, 
  catagory: String,
  subject: String,
  lastUsed: Date,
  timesUsed: Number,
   card: [{
    type: Schema.Types.ObjectId,
    ref: 'Card',
    required: true,
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