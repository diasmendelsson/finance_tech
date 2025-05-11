'use client'
import Image from "next/image";
import { Twirl as Hamburger } from 'hamburger-react';
import Link from "next/link";

export default function Header(){
    return(
        <header className="fill-white drop-shadow-xl/30 flex items-center justify-between h-16 bg-green-600 font-[family-name:var(--font-geist-sans)] text-white px-12" >

            <div className="fill-white drop-shadow-xl/50 ">
             <Hamburger duration={0.4} size={28}  rounded />
             </div>
            

            <div className=""> 

            <Link href='/home' className="flex gap-2">
                <h1 className="fill-white drop-shadow-xl/50 text-xl font-bold">Finance Tech</h1>
                <Image 
                    className="fill-white drop-shadow-xl/50"
                    src='/cifrao.png'
                    width={30}
                    height={30}
                    alt="Cifrão"
                />
            </Link>

            </div>

            <div className="cursor-pointer flex">

    
                    <Image 
                    className="fill-white drop-shadow-xl/50"
                    src='/search.svg'
                    width={28}
                    height={28}
                    alt="Icone de Lupa de pesquisa"
                    />
                
            </div>
            
        </header>
    )
}