import pg from 'pg';
import { Pool } from 'pg';

// Configuração da conexão com o banco de dados PostgreSQL

const globalForPg = globalThis;

let pool;

if (!globalForPg.pgPool) {
  globalForPg.pgPool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
  });
}

pool = globalForPg.pgPool;

export default pool;