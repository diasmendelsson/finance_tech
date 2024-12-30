'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


import { client } from './lib/contentful/client';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { useState, useEffect } from "react";

export default function Home() {


          const [posts, setPosts ] = useState([]);

          useEffect(()=>{
            
            const fetchPosts = async ()=>{
              try{
                const response = await client.getEntries({ content_type: 'posts'});
                setPosts(response.items);
              } catch(error){
                console.error('Erro ao buscar posts:', error);
              }
            };
            fetchPosts();

          }, []);

      return (
        
          <main className={styles.main}>
            
            <h1>
              Seja Bem Vindo ao <span>Finance Tech</span>
            </h1>
            <p>O Blog que fala sobre Finanças e Tecnologia</p>


            <section className={styles.container1}>

              <h2>Confira os nossos posts</h2>

              <div className={styles.section}>

              <div className={styles.container}>

              {posts.map(post => (

                  <div key={post.sys.id} className={styles.card}>

                      <Link className={styles.link} href={`/posts/${post.fields.slug}`} > 
                        <Image className={styles.img} alt='Sala com Gadgets Eletronicos' width={400} height={292} src={`http://${post.fields.thumbnail.fields.file.url}`}/>
                        <h2 className={styles.h2_card}>{post.fields.title}</h2>
                      </Link>
                  </div>



              ))}

              </div>

          
            </div>
            </section>

          </main>
        
      );
}
