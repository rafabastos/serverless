const mongoose = require('mongoose');

const AvailabilitySchema = new mongoose.Schema({
    week_day: { type: Number, required: true, unique: true },
    start: { type: Number, required: true, unique: false },
    end: { type: Number, required: true, unique: false }
}, { timestamps: true });

module.exports = mongoose.model('Availability', AvailabilitySchema);
