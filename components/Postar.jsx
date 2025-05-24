'use client'

import postAction from "@/lib/post";
import { useActionState, useState } from 'react';

const initialState = { 
    message:'',

}

export default function Postar(){


    const [state, action, isPending] = useActionState( postAction, initialState );
    const [title, setTitle ] = useState('');
    const [slug, setSlug ] = useState('');

    const gerarSlug = (texto) =>{
      return texto
        .toLowerCase()
        .normalize('NFD') // Remove acentos
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/\s+/g, '-') // Espaços viram traços
        .replace(/[^\w\-]+/g, '') // Remove caracteres especiais
        .replace(/\-\-+/g, '-') // Remove traços duplos
        .replace(/^-+/, '') // Remove traços no início
        .replace(/-+$/, ''); // Remove traços no fim
    }

    const handleTitleChange = (e) => {
        const novoTitulo = e.target.value;
        setTitle(novoTitulo);
        setSlug(gerarSlug(novoTitulo));
    }

    return (
        <section className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 mb-4 pt-6">

           <h1 className="md:text-4xl font-bold mb-6">Crie suas publicações</h1>

           <form action={action} className=" flex flex-col items-center gap-4 p-4 overflow-hidden">

                <div className="w-full  flex flex-col p-4">
                    <label htmlFor="title">Título</label>
                    <input  className="outline-none px-2 border h-8" type="text" name="title" required value={title} onChange={handleTitleChange} />
                </div>

                <div  className="w-full flex flex-col p-4">
                    <label htmlFor="description">Descrição</label>
                    <input  className="border outline-none px-2 h-8" type="text" name="description" required/>
                </div>

                <div  className="w-full flex flex-col p-4">
                    <label htmlFor="slug">Slug</label>
                    <input   className="border outline-none px-2 h-8"
                        type="text"
                        name="slug"
                        defaultValue={slug}
                        readOnly
                
                    />
                </div>


                <div  className="w-full  flex flex-col p-4">
                    <label htmlFor="imagebanner">Imagem Banner</label>
                    <input  className="cursor-pointer px-2 h-6 w-58 border" type="file" name="imagebanner" />
                </div>

                <div  className="flex flex-col p-4 ">
                    <label htmlFor="content"></label>
                    <textarea  className="border outline-none px-4 pt-4" name="content" rows={40} cols={63}/>


                </div>

                { state.message && (
                    <p className={state.error ? "text-red-600" : "text-green-600"}>
                        {state.message}
                    </p> 
                )}

                <button className=" w-46 border cursor-pointer" type="submit">Salvar Post</button>

           </form>


           
        </section>
    )
}