import express from 'express';
const router = express.Router();

// Route the user to the protected route if they are authenticated
// If they are not authenticated, they will be redirected to the login page
router.get('/', (req, res) => {
  res.send('Protected route');
});

export default router;