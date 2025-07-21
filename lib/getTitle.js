'use server'

import pool from "./db"

export async function getTitle() {

  try {
    const res = await pool.query('SELECT id, title, slug FROM publicacoes ORDER BY createdat DESC LIMIT 4')
    return res.rows
    console.log(res.rows)

  }catch(err){
    
    console.error('Erro ao buscar os titulos:', err)
    return []
  }
}