import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export const query = (text, params) => pool.query(text, params);

export const testConnection = async () => {
  try {
    await pool.query('SELECT 1');
    console.log('Database connected successfully');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error.message);
    return false;
  }
};
