// routes/contactRoutes.js
import express from 'express';
import { submitContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact — Submit a new message
router.post('/', submitContact);

// GET /api/contact — Admin: view all messages
router.get('/', getContacts);

export default router;
