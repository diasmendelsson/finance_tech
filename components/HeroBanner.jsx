import Image from "next/image"


export default function HeroBanner(){
    return(
        <section> 
          <div className="relative h-full overflow-hidden text-white p-8">

            {/* Imagem de fundo usando Next.js */}
            <Image
                src="/banner.png"
                alt="Banner"
                fill // faz a imagem preencher todo o contêiner
                className="object-cover object-center -z-10" // mesmo que bg-cover bg-center
                priority // carrega rápido
                placeholder="blur" // opcional
                blurDataURL="/banner.png" // opcional
            />

            {/* Conteúdo sobreposto */}
            <div className="animate-fade-in-up relative z-10">
                <h1 className="px-2 py-2 text-2xl md:text-4xl lg:text-5xl bg-green-700/30 backdrop-invert backdrop-opacity-10 font-bold text-shadow-lg/30">
                Seu Guia Atualizado em Finanças, Cripto e Tecnologia
                </h1>
                <p className="px-2 py-2 text-sm md:text-xl lg:text-2xl bg-green-700/30 backdrop-invert backdrop-opacity-10 mt-2 text-shadow-lg/30">
                Explore conteúdos atualizados sobre finanças pessoais, moedas digitais como Bitcoin, tendências de tecnologia e tudo que está em alta no mercado. Um blog feito para quem quer entender e crescer no mundo digital e financeiro.
                </p>
            </div>

            </div>

 
        </section>
    )
}