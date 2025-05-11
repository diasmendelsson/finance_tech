import pool from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function ListPost(){

    const allPosts = await pool.query(
        'SELECT * FROM publicacoes'
      )

    return(
        <section className="w-full">

            <div className="text-center bg-green-600 w-42 p-2 mb-4"><h2 className="text-white">ÚLTIMAS NOTÍCIAS</h2></div>

            <div className="grid sm:grid-cols-2 gap-8 ">
                {allPosts.rows.map(post => (
                    <article className="border-b-2" key={post.id}>

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
                            <p className="text-sm text-gray-400 mt-2 mb-2">{post.createdat.toLocaleDateString()}</p>
                        </div>
                        </Link>

                    </article>
                ))}
            </div>

        </section>
    )
}