const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  imagePath: {
    type: String,
    required: true
  },
  sabor: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }


});

module.exports = mongoose.model('Crema', NoteSchema);

