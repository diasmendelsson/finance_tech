
import Image from "next/image";
import pool from '@/lib/db';

// Gera o título da aba
export async function generateMetadata({ params}) {


  const { slug } = await params
  const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1', [slug]);
  const post = res.rows[0];

   return {
    title: post.titulo,
    description: post.descricao,
    openGraph: {
      title: post.titulo,
      description: post.descricao,
      url: `https://www.seusite.com/posts/publicacoes/${slug}`,
      images: [
        {
          url: `https://www.seusite.com${post.imagebanner}`, // caminho completo da imagem og
          width: 1200,
          height: 630,
          alt: post.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.titulo,
      description: post.descricao,
      images: [`https://www.seusite.com${post.imagebanner}`],
    },
  };
}
// Página em si
export default async function PostPage({ params}) {

   
  const { slug } = await params
  const res = await pool.query('SELECT * FROM publicacoes WHERE slug = $1',[slug]);
  const post = res.rows[0];

  const subtituloIndices = [5, 8];


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
        Criado em {new Date(post.createdat).toLocaleDateString()}
      </p>

      <p className="text-sm text-gray-400">
        Atualizado {new Date(post.updateat).toLocaleDateString()}
      </p>

      {/* A imagem já está boa — só adicionar w-full */}
      <Image
        className="mt-10 w-full "
        src={post.imagebanner}
        alt="Imagem do post"
        width={550}
        height={100}
      />
    </div>

    {/* TEXTO do conteúdo do post */}
    <div className="mt-6 space-y-4">
      <div>Olá mundo</div>
      {Array.isArray(post.content) &&
        post.content.map((item, index) => (
          <p
            className={`${
              subtituloIndices.includes(index)
                ? 'text-3xl font-semibold mt-8 mb-4'
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