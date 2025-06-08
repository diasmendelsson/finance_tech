'use client'

import contato from '@/lib/contato';
import { useActionState, useState } from 'react';

const initialState = {
    message: '',
}

export default function Contato(){

    const [state, action, isPending] = useActionState(contato, initialState);

    return (  

     <section className="mt-12 max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 mb-4 pt-6 overflow-hidden">


       <form className="  overflow-hidden " action={action}>

         <h1 className="text-gray-600 md:text-3xl font-bold mb-6">Deixe um recado</h1>

           <div className="flex flex-col mb-4">
             <label className=" md:text-base text-sm" htmlFor="nome">Nome:</label>
             <input className='h-8  px-2 outline-none' type="text" name="nome" required placeholder='Digite o seu nome' />
             <div className='border-b-2  border-green-600'></div>
           </div> 

           <div className="flex flex-col mb-4">
             <label  className=" md:text-base text-sm" htmlFor="email">Email:</label>
             <input className='h-8 px-2 outline-none' type="email" name="email" required placeholder='Digite o seu email' />
             <div className=' border-b-2  border-green-600'></div>
           </div>

           <div className="flex flex-col mb-12 gap-2">
             <label  className=" md:text-base text-sm" htmlFor="mensagem">Recado:</label>
             <textarea className=" border-2  border-green-600 px-4 py-2 outline-none" type="text"  name="mensagem"   rows={5}  placeholder='Como posso te ajudar ?' />
           </div>

           <div className=' flex justify-center mb-4'>
             { state.message && (
              <p className={state.error ? "text-red-600" : "text-green-600"}>
                {state.message}
              </p>
            )}
           </div>

           <div className='flex items-center justify-center'>
              <button 
                className="flex items-center cursor-pointer relative px-4 py-2 border-2 border-green-600  rounded hover:border-green-700" 
               
                >
                {isPending ? (
                  <div className="inline-block w-5  h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Enviar'
                )}
              </button>
          </div>


        </form>


           
     </section>
    )
}