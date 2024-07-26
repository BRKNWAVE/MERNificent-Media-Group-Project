// Use mongoose to connect to MongoDB and load environment variables from .env file
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize db connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
