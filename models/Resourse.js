const mongoose = require('mongoose');

// Define the schema for the resource
const resourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  resourceUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Create the Mongoose model for the resource
const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
