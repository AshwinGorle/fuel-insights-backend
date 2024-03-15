import mongoose from "mongoose";

// Define the schema for the topic
const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    // required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  videoUrl: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  resources: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resource' // Assuming you have a Resource model
  }],
  notes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note' // Assuming you have a Note model
  }],
  qnas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment' // Assuming you have a Comment model for Q&A
  }]
});

// Create the Mongoose model for the topic
const   TopicModel = mongoose.model('Topic', topicSchema);

export default TopicModel;
