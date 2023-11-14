import express from "express";
import { authenticateUser, registerUser } from '../middleware/authMiddleware';
const router = express.Router()

// Signup route
router.post('/register', registerUser, (req, res) => {
    res.json({ message: 'User registered successfully', success: true });
});
  
// Login route
router.post('/login', authenticateUser, (req, res) => {
    res.json({ message: 'Login successful', success: true });
});

export default router