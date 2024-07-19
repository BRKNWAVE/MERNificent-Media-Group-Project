const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Function to hash password
const hashPassword = (password) => crypto.createHash('sha256').update(password).digest('hex');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = hashPassword(password);
  try {
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to check if the hashed password matches user input and return a JWT token if it does
exports.login = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = hashPassword(password);
  try {
    const user = await User.findOne({ username, password: hashedPassword });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};