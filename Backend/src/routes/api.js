import express from 'express';
import rateLimit from 'express-rate-limit';
import { submitQuote } from '../controllers/quoteController.js';
import { submitContact } from '../controllers/contactController.js';
import { submitConsultation } from '../controllers/consultationController.js';

const router = express.Router();

// Rate limiting for public forms: Max 5 requests per 15 minutes per IP
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, error: 'Too many submissions from this IP, please try again later.' }
});

router.post('/quotes', formLimiter, submitQuote);
router.post('/contact', formLimiter, submitContact);
router.post('/consultations', formLimiter, submitConsultation);

// Health check
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'SAFE Core API is running' });
});

export default router;
