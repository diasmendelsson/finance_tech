import Link from 'next/link';

export default function Navbar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/50 z-30 transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      />

      {/* Sidebar */}
      <div
        className={`
          absolute top-0 left-0 h-full w-[300px] bg-zinc-600/50 text-white z-40
          transform delay-160 transition-transform duration-300 ease-in-out
       
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className=" flex flex-col items-center pt-10">
          <ul className="pl-8 mt-20 flex flex-col items-start gap-6 uppercase font-bold bg-black-500/50 w-full">
            <li className='border-l-3 border-green-600 px-3 h-7 flex items-center'><Link href="/" onClick={onClose}>Home</Link></li>
            <li className='border-l-3 border-red-600  px-3 h-7 flex items-center'><Link href="/sobre" onClick={onClose}>Sobre</Link></li>
            <li className='border-l-3 border-indigo-500 px-3 h-7 flex items-center'><Link href="/contato" onClick={onClose}>Contato</Link></li>
            <li className='border-l-3 border-green-600 px-3 h-7 flex items-center'><Link href="/money" onClick={onClose}>Money</Link></li>
            <li className='border-l-3 border-teal-500 px-3 h-7 flex items-center'><Link href="/criptomoedas" onClick={onClose}>Criptomoedas</Link></li>
            <li className='border-l-3 border-red-500 px-3 h-7 flex items-center'><Link href="/inteligencia" onClick={onClose}>Inteligência Artificial</Link></li>
            <li className='border-l-3 border-indigo-500 px-3 h-7 flex items-center'><Link href="/eletronicos" onClick={onClose}>Eletrônicos</Link></li>
            <li className='border-l-3 border-red-500 px-3 h-7 flex items-center'><Link href="/motors" onClick={onClose}>Motors</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}