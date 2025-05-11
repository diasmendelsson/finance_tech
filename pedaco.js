// Gera o título da aba
export async function generateMetadata({ params }) {

    const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1', [params.slug]);
    const post = res.rows[0];
  }
  
  // ⚙️ PRÉ-RENDERIZAÇÃO DOS SLUGS AQUI:
  export async function generateStaticParams() {
    const res = await pool.query('SELECT slug FROM publicacoes');
    const posts = res.rows;
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }
  
  // Página em si
  export default async function PostPage({ params }) {
  
    const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1', [params.slug]);
    const post = res.rows[0];
  
    const subtituloIndices = [5, 8];}