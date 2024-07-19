import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { getProtectedData } from '../controllers/protectedController.js';

const router = express.Router();

router.get('/', authenticateToken, getProtectedData);

export default router;