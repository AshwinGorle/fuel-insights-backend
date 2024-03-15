const mongoose = require('mongoose');

// Define the schema for the note
const noteSchema = new mongoose.Schema({
  timeStamp: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create the Mongoose model for the note
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
