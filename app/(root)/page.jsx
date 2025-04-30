import Image from "next/image";
import pool from '@/lib/db';



export default async function Home() {

  const allPosts = await pool.query(
    'SELECT * FROM posts'
  )

  

  

  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold">Finance Tech</h1>
    

      {allPosts.rows.map((post) => ( 
        

              <section key={post.id}>

                <h1 className="text-4xl font-bold tracking-wide w-4xl mb-2">{post.title}</h1>
                <p>{post.description}</p>

                <div className="w-96 p-4 mt-4">
                    <p className="text-sm text-gray-300">Criado em {post.created_at.toLocaleDateString()}</p>
                    <p className="text-sm text-gray-300">Atualizado  {post.updated_at.toLocaleDateString()}</p>
                </div>

              <Image 
                className="mt-10"
                src={post.imagebanner1} 
                alt="Imagem do bitcoin"
                width={800}
                height={400}
              />

              <div key={post.content} className="mt-6 space-y-4">

                         
                 {post.content.map((item, index) =>(
                  <p className=" w-4xl" key={index}>{item.valor}</p>
                 ))}

    
           
                    
              </div>

             
             

              </section>

      ))}

       
    </main>
  );
}
