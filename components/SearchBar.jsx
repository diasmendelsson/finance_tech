"use client"
import { useState } from "react";
import Image from "next/image";

export default function SearchBar(){

    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (

        <div className="">
        <div className="flex ">
            <input
                className="w-24 pl-2 outline-none"
                type="text"
                placeholder="Pesquisar..."
                value={query}
                onChange={handleInputChange} 
            />

              <Image
                className="fill-white drop-shadow-xl/50"
                src='/search.svg'
                width={28}
                height={28}
                alt="Ícone de Lupa de pesquisa"
          />
         
          
        </div>

      

        </div>
    )
}