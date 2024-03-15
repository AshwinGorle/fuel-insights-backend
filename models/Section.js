import mongoose from "mongoose";

// Define the schema for the section
const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numberOfTopics: {
    type: Number,
    // required: true
  },
  duration: {
    type: Number, // Change the type to Number
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  topics: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic' // Assuming you have a Topic model
  }]
});

// Create the Mongoose model for the section
const SectionModel = mongoose.model('Section', sectionSchema);

export default SectionModel;