'use client'

import postAction from "@/lib/post";
import { useActionState } from 'react';

const initialState = { 
    message:'',

}

export default function Postar(){

    const [state, action, isPending] = useActionState( postAction, initialState )

    return (
        <section className="mt-4 border min-h-screen flex flex-col items-center font-[family-name:var(--font-geist-sans)]">
           <h1>Crie suas publicações</h1>

           <form action={action} className="border flex flex-col items-center gap-4 p-4">

                <div className="w-full border flex flex-col p-4">
                    <label htmlFor="title">Título</label>
                    <input  className="border" type="text" name="title" required />
                </div>

                <div  className="w-full border flex flex-col p-4">
                    <label htmlFor="description">Descrição</label>
                    <input className="border" type="text" name="description" required/>
                </div>

                <div  className="w-full border flex flex-col p-4">
                    <label htmlFor="imagebanner1">Imagem Banner 1</label>
                    <input   className="cursor-pointer px-2 h-6 w-58 border"type="file" name="imagebanner1"/>
                </div>

                <div  className="w-full border flex flex-col p-4">
                    <label htmlFor="imagebanner2">Imagem Banner 2</label>
                    <input  className="cursor-pointer px-2 h-6 w-58 border" type="file" name="imagebanner2" />
                </div>

                <div  className="border flex flex-col p-4">
                    <label htmlFor="content"></label>
                    <textarea className="p-4 border" name="content" rows={40} cols={80}/>


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