const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false }
}, { timestamps: true });

module.exports = mongoose.model('Customer', CustomerSchema);
