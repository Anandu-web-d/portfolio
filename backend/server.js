// ============================================================
// server.js — Express Backend for Portfolio Contact API
// ============================================================
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ──────────────────────────────
// Middleware
// ──────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// ──────────────────────────────
// Routes
// ──────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running 🚀', timestamp: new Date() });
});

app.use('/api/contact', contactRoutes);

// ──────────────────────────────
// Error Handler
// ──────────────────────────────
app.use(errorHandler);

// ──────────────────────────────
// Start Server
// ──────────────────────────────
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`\n🚀 Server running on http://localhost:${PORT}`);
      console.log(`📬 Contact API: http://localhost:${PORT}/api/contact`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err.message);
    process.exit(1);
  }
};

start();
