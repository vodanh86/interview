// lib/db.ts
import mysql, { Pool } from 'mysql2/promise';

export const db: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
