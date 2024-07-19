import express from 'express';
import User from '../models/User.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Middleware to ensure admin rights
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
};

// Create a new user
router.post('/add', authenticateToken, adminMiddleware, async (req, res) => {
  try {
    const { username, password, email, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ username, password, email, firstName, lastName });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all users
router.get('/', authenticateToken, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password from response
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read a single user by ID
router.get('/:id', authenticateToken, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select('-password'); // Exclude password from response

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a user by ID
router.put('/:id', authenticateToken, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, email, firstName, lastName } = req.body;

    // Check if user exists
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Update user details
    const updatedData = { username, email, firstName, lastName };
    
    // Only update the password if provided
    if (password) {
      updatedData.password = password;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a user by ID
router.delete('/:id', authenticateToken, adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
