const mongoose = require('mongoose');

const HolidaySchema = new mongoose.Schema({
    day: { type: Date, required: true, unique: false }
}, { timestamps: true });

module.exports = mongoose.model('Holiday', HolidaySchema);
