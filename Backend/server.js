import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiRoutes from './src/routes/api.js';
import { testConnection } from './src/utils/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error' 
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  await testConnection();
});
