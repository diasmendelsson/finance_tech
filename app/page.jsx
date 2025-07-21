import HeroBanner from "@/components/HeroBanner";
import Carrossel from "@/components/Carrossel";
import { getTitle } from "@/lib/getTitle";
import ListPostTags from "@/components/ListPostTags";



export default async function Home() {

  const posts = await getTitle();

  return (

    <main className="flex flex-col items-center  justify-center w-full  px-10 py-10 font-[family-name:var(--font-geist-sans)]">
      <HeroBanner />

      <div className="w-full mt-14">

       <h1 className="text-xs text-center bg-green-500 text-white py-2 w-32">ÚLTIMAS NOTÍCIAS</h1> 
       
      <div className="border-y-2 border-green-500">
      <Carrossel initialPosts={posts}/>
      </div>

      </div>


      <div className="w-full p-2 mt-14 mb-4"><h2 className="text-green-600 font-bold">Money</h2>
      <ListPostTags tags='Money' />
      </div> 

      <div className="w-full p-2 mb-4"><h2 className="text-green-600 font-bold">Eletrônicos</h2>
      <ListPostTags tags='Eletrônicos' />
      </div> 
    </main>
  );
}
