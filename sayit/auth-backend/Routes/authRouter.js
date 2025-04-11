import express from 'express';
import { register } from '../controllers/authController.js';
import { login } from '../controllers/authController.js';
import { test } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.post("/register",register)

router.post("/login", login)

router.get("/test",authMiddleware, test)




export default router;