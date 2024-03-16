const mongoose = require('mongoose');

// Define schema for fuel economy data
const fuelModelSchema = new mongoose.Schema({
    vehicleClass: {
        type: String,
        required: true
    },
    distanceTravelled: {
        type: Number,
        required: true
    },
    fuelConsumed: {
        type: Number,
        required: true
    },
    fuelEconomy: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

// Create Mongoose model from schema
const FuelModel = mongoose.model('FuelModel', fuelModelSchema);

module.exports = FuelModel;