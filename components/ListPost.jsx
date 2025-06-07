import pool from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function ListPost(){

    const allPosts = await pool.query(
        'SELECT * FROM publicacoes ORDER BY createdat DESC'
      )

    return(
        <section className="w-full">

            <div className="text-center bg-green-600 w-42 p-2 mb-4"><h2 className="text-white">ÚLTIMAS NOTÍCIAS</h2></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 ">

                {allPosts.rows.map(post => (

                    <article className="w-full max-w-94 mx-auto mt-8 border-b-2 mt-8 w-80" key={post.id}>

                        <Link href={`/posts/publicacoes/${post.slug}`}>
                        <Image 
                            src={post.imagebanner}
                            alt={post.title}
                            width={350}
                            height={350}
                        />
                        <div className="">
                            <h2 className="text-2xl font-semibold mt-2 mb-2">{post.title}</h2>
                            <p className="text-gray-700 line-clamp-3">{post.description}</p>
                            <p className="text-sm text-gray-400 mt-2 mb-2">{post.createdat.toLocaleDateString('pt-BR')}</p>
                        </div>
                        </Link>

                    </article>
                ))}
            </div>

        </section>
    )
}
