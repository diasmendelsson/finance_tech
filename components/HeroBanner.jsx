import Image from "next/image"


export default function HeroBanner(){
    return(
        <section> 
          

            <div className="p-8 bg-[url(/banner.png)] h-94 text-white bg-cover bg-center bg-no-repeat overflow-hidden ">

            <div className="animate-fade-in-up">
            <h1 className="z-0 px-2 py-2 text-2xl md:text-4xl lg:text-5xl bg-green-700/30 backdrop-invert backdrop-opacity-10 font-bold text-3xlfont-bold text-shadow-lg/30">Seu Guia Atualizado em Finanças, Cripto e Tecnologia</h1>
            <p className="px-2 py-2 text-base md:text-xl lg:text-2xl bg-green-700/30 backdrop-invert backdrop-opacity-10  text-white mt-2  text-base text-shadow-lg/30 ">Explore conteúdos atualizados sobre finanças pessoais, moedas digitais como Bitcoin, tendências de tecnologia e tudo que está em alta no mercado. Um blog feito para quem quer entender e crescer no mundo digital e financeiro.</p> 
            </div>
            </div>
        </section>
    )
}