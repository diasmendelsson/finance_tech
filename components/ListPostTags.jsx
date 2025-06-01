import pool from "@/lib/db";
import Link from "next/link";
import Image from "next/image";

export default async function ListPostTags({ tag }) {
  const { rows: posts } = await pool.query(
    'SELECT * FROM publicacoes WHERE $1 = ANY (tags)', [tag]
  );

  return (

    <section className="w-full h-screen px-4 py-4">

      <div className="text-center bg-green-600 w-46 font-bold p-2 mt-4 mb-4">
        <h2 className="text-white ">Posts sobre {tag}</h2>
      </div>

      <div className="grid sm:grid-cols md:grid-cols-2 px-4">
        {posts.map(post => (
          <article className="border-b-2 mt-8 w-80" key={post.id}>
            <Link href={`/posts/publicacoes/${post.slug}`}>
              <Image
                src={post.imagebanner}
                alt={post.title}
                width={350}
                height={350}
              />
              <div>
                <h2 className="text-2xl font-semibold mt-2 mb-2">{post.title}</h2>
                <p className="text-gray-700 line-clamp-3">{post.description}</p>
                <p className="text-sm text-gray-400 mt-2 mb-2">
                  {new Date(post.createdat).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}