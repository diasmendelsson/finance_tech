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
          fixed top-0 left-0 h-full w-[140px] bg-green-600 text-white z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <ul className="mt-20 flex flex-col items-center gap-6">
          <li><Link href="/" onClick={onClose}>Home</Link></li>
          <li><Link href="/sobre" onClick={onClose}>Sobre</Link></li>
          <li><Link href="/contato" onClick={onClose}>Contato</Link></li>
        </ul>
      </div>
    </>
  );
}