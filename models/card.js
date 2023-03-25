const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: String,
  sideOneWord: {
    type: String,
    required: true,
  },
  sideTwoWord: {
    type: String,
    required: true,
  },
  image: String,
  priority: { Number,
  default: 0,
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
  text: String,
}, {
  timestamps: true,
}
);

module.exports = mongoose.model('Card', cardSchema);