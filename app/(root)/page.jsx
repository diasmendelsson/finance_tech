import Image from "next/image";
import pool from '@/lib/db';
import HeroBanner from "@/components/HeroBanner";
import ListPost from "@/components/ListPost";


export default async function Home() {




  return (

    <main className="flex flex-col items-center gap-14 justify-center w-full px-10 py-10 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <HeroBanner />

      <ListPost />
    </main>
  );
}
