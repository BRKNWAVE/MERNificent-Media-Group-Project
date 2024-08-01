import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware function to authenticate using JWT 
const authenticate = (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
// Verify the token, attach the decoded user to the request object, and call the next middleware if needed
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
// If the token is not valid, return a 401 status code and a message
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authenticate;
