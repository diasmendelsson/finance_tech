import  pool  from './db' // ou './conexao' se for o nome do seu arquivo

export async function getAllSlugs() {
  try {
    const res = await pool.query('SELECT slug FROM publicacoes')
    return res.rows.map(row => row.slugs)
  } catch (err) {
    console.error('Erro ao buscar slugs:', err)
    return []
  }
}
