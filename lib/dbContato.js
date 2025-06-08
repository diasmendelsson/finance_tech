import pg from 'pg';
import { Pool } from 'pg';

// Configuração da conexão com o banco de dados PostgreSQL

const globalForContato = globalThis;

let poolContato;

if (!globalForContato.pgPoolContato) {
  globalForContato.pgPoolContato = new Pool({
    user: process.env.AUTH_DB_USER,
    host: process.env.AUTH_DB_HOST,
    database: process.env.AUTH_DB_NAME,
    password: process.env.AUTH_DB_PASSWORD,
    port: process.env.AUTH_DB_PORT,
  });
}

poolContato = globalForContato.pgPoolContato;

export default poolContato;