
import Image from "next/image";
import pool from '@/lib/db';

// Gera o título da aba
export async function generateMetadata({ params}) {

  const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1', [params.slug]);
  const post = res.rows[0];

 


}
// Página em si
export default async function PostPage({ params}) {

  const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1', [params.slug]);
  const post = res.rows[0];

  const subtituloIndices = [5, 8];


  return (
  
    <main className="overflow-hidden font-[family-name:var(--font-geist-sans)] mt-24 mb-2 
    pt-6">
      <section className="mb-4 px-4 " key={post.id}>
        <h1 className="text-4xl font-bold tracking-wide mb-2">{post.title}</h1>
        <p className="">{post.description}</p>

        <div className=" p-4 mt-4 mb-4">
          <p className="text-sm text-gray-400">
            Criado em {new Date(post.createdat).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-400">
            Atualizado {new Date(post.updateat).toLocaleDateString()}
          </p>
        </div>

        <Image
          className="mt-10"
          src={post.imagebanner}
          alt="Imagem do post"
          width={350}
          height={220}
        />

        <div className="px-4 mt-6 space-y-4 overflow-hidden">
          {Array.isArray(post.content) &&
            post.content.map((item, index) => (
              <p
                className={`${
                  subtituloIndices.includes(index)
                    ? 'text-3xl font-semibold mt-8 mb-2'
                    : 'text-base'
                }`}
                key={index}
              >
                {item.valor}
              </p>
            ))}
        </div>
      </section>
      </main>
  );
}