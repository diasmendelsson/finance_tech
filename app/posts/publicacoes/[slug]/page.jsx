export const dynamic = 'force-dynamic'; 

import Image from "next/image";
import pool from '@/lib/db';

// Gera o título da aba
export async function generateMetadata({ params}) {


  const { slug } = await params
  const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1', [slug]);
  const postRaw = res.rows[0];


  const post = {
    ...postRaw,
    createdatFormatted: new Date(postRaw.createdat).toLocaleDateString('pt-BR'),
    updateatFormatted: new Date(postRaw.updateat).toLocaleDateString('pt-BR'),

  };
}
// Página em si
export default async function PostPage({ params}) {

   
  const { slug } = await params
  const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1',[slug]);
  const postRaw = res.rows[0];



  const post = {
    ...postRaw,
    createdatFormatted: new Date(postRaw.createdat).toLocaleDateString('pt-BR'),
    updateatFormatted: new Date(postRaw.updateat).toLocaleDateString('pt-BR'),

  };

 

  return (
  
    <main className="font-[family-name:var(--font-geist-sans)] mb-2 pt-6">
  {/* SECTION que define a largura máxima e centraliza tudo */}
  <section className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 mb-4 pt-6" key={post.id}>

    {/* CONTAINER interno do conteúdo */}
    <div className="mt-4 mb-4">
      <h1 className="text-4xl font-bold tracking-wide mb-4">
        {post.title}
      </h1>

      <p className="mb-2">
        {post.description}
      </p>

      <p className="text-sm text-gray-400">
        Criado em {post.createdatFormatted}
      </p>

      <p className="text-sm text-gray-400">
        Atualizado {post.updateatFormatted}
      </p>

      {/* A imagem já está boa — só adicionar w-full */}
      <Image
        className="mt-10"
        src={post.imagebanner}
        alt="Imagem do post"
        width={512}
        height={312}
      />
    </div>

    {/* TEXTO do conteúdo do post */}
    <div className="mt-6 space-y-4">
      
      {Array.isArray(post.content) &&
        post.content.map((item, index) => {
          if (item.type === "h2") {
            return (
              <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                {item.content}
              </h2>
            );
          }

          if (item.type === "ul") {
            const itens = item.content.split("\n").filter(Boolean); // quebra em linhas
            return (
              <ul key={index} className="list-disc list-inside pl-4 space-y-1">
                {itens.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            );
          }

          // padrão: parágrafo
          return (
            <p key={index} className="text-base leading-relaxed">
              {item.content}
            </p>
          );
        })}
  
    </div>
  </section>
</main>
  );
}