import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import authenticate from './middleware/auth.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());

// Avoid CORS issues by allowing requests from the frontend URL
app.use(cors({
  origin: 'https://mernificent-media-group-project.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Import protected routes using ES module syntax (import instead of require)
import protectedRoutes from './routes/protectedRoutes.js';
app.use('/api/protected', authenticate, protectedRoutes);

// Serve static files from the frontend build directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));

// Serve index.html for all non-API routes (SPA behavior)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
