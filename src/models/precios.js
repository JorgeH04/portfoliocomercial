const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  imagePath: {
    type: String,
    required: true
  },
  producto: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }

});

module.exports = mongoose.model('Exc', NoteSchema);
