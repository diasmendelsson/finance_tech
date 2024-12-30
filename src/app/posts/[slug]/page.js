import { client } from '@/app/lib/contentful/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Image from 'next/image';
import styles from '../post.module.css';

export async function getPost( {slug} ) {

    try{
        const response = await client.getEntries({
            content_type: 'posts',
            'fields.slug': slug,
        });

        return response.items[0];
    }catch(error){
        console.error("Erro ao buscar Post:", error);
    }

}

export default async function PostPage({params}){
    
   
        const post = await getPost(params.slug);
    
     
    return (
        
        <div className={styles.container}>

        <Image className={styles.img} alt='Sala com Gadgets Eletronicos' width={1000} height={582} src={`http://${post.fields.imagemBanner.fields.file.url}`}/>

        <div className={styles.content}>{documentToReactComponents(post.fields.method)}</div>

        

        </div>
    );

}