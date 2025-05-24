'use client'

import Image from "next/image";
import { Twirl as Hamburger } from 'hamburger-react';
import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Navbar lateral com overlay */}
      <Navbar isOpen={isOpen} onClose={handleClose} />

      {/* Header principal */}
      <header className="fill-white drop-shadow-xl/30 flex items-center justify-between text-center h-16 bg-green-600 font-[family-name:var(--font-geist-sans)] text-white px-6 z-50 relative top-0">
        
        {/* Botão Hamburger */}
        <div className="cursor-pointer z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.4} size={24} rounded />
        </div>

        {/* Logo e título */}
        <div className="min-w-[100px] flex items-center">
          <Link href='/' className="flex gap-2">
            <h1 className="fill-white drop-shadow-xl/50 font-bold text-2xl">Finance Tech</h1>
            <Image
              className="fill-white drop-shadow-xl/50 "
              src='/cifrao.png'
              width={35}
              height={35}
              alt="Cifrão"
            />
          </Link>
        </div>

 
        <div className="cursor-pointer flex">
        {/*} <SearchBar /> */}
        </div>
       
      </header>
    </>
  );
}