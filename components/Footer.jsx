import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="h-16 mt-20 py-8 fill-white drop-shadow-xl/30 flex items-center justify-between text-center bg-green-600 font-[family-name:var(--font-geist-sans)] text-white px-6  overflow-hidden">
           
            <div className="flex flex-col gap-2">
              
               <div className="flex items-center gap-4">
               <a   className="text-2xl" href="https://www.instagram.com/diasmendelsson.dev/" target="_blank" > <FaInstagram /></a> 
               <a className="text-2xl" href="https://www.linkedin.com/in/mendelsson-dias/" target="_blank">< FaLinkedin /></a>
               <a className="text-2xl" href="https://www.tiktok.com/@diasmendelsson.dev"  target="_blank"> <FaTiktok /></a></div>
            </div>
             <div><p className="text-xs md:text-sm  lg:text-sm">© <span className="font-bold">Finance Tech</span> 2025. Todos os direitos reservados.</p></div>
             <div></div>
        </footer>
    )
}
