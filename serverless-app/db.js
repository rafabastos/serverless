require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return; 
    }
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        // process.exit(1);
    }
};

module.exports = connectDB;
