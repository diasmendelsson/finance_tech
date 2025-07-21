'use client'

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Carrossel({ initialPosts }){

    const [posts, setPosts] = useState( initialPosts || []);
    const [index, setIndex ] = useState(0);

    // Simulando busca dinâmica
    useEffect(() => {

    if (!posts.length) return
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1)  % posts.length)
    }, 3000)
    return () => clearInterval(interval)
  },  [posts])

  if (!posts.length) return <p>Carregando posts...</p>

  return (
    <div className="text-center relative  w-full  overflow-hidden  border-bottom">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {posts.map((post) => (

          <Link
            href={`/posts/publicacoes/${post.slug}`}
            key={post.id}
            className="w-full flex-shrink-0 block  text-black p-6"
          > 
            <h3 className="font-bold">{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}