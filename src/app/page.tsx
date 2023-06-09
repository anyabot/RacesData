"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="font-semibold my-6 text-3xl md:text-6xl">Search for Formula 1 Data You Want</div>
    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 color text-white">
      <Link href="/years" className="md:col-span-2 md:row-span-2 relative cursor-pointer">
        <div className="hover:bg-black hover:bg-opacity-25 w-full h-full absolute ease-in-out duration-300"></div>
        <img
          src="https://phantom-marca.unidadeditorial.es/4a9dc9ebef4bb286aec3966c71702487/resize/828/f/jpg/assets/multimedia/imagenes/2021/08/09/16285056402026.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 p-1 font-semibold text-xl md:text-3xl">
          Years
        </div>
      </Link>
      <Link href="/races" className="md:row-span-2 relative cursor-pointer">
        <div className="hover:bg-black hover:bg-opacity-25 w-full h-full absolute ease-in-out duration-300"></div>
        <img
          src="https://media.formula1.com/image/upload/content/dam/fom-website/sutton/2022/Italy/Sunday/1422823415.jpg.transform/9col/image.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 p-1 font-semibold text-xl md:text-3xl">
          Races
        </div>
      </Link>
      <Link href="/drivers" className="relative cursor-pointer">
        <div className="hover:bg-black hover:bg-opacity-25 w-full h-full absolute ease-in-out duration-300"></div>
        <img
          src="https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.640.medium.jpg/1677069594164.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 p-1 font-semibold text-xl md:text-3xl">
          Players
        </div>
      </Link>
      <Link href="/teams" className="relative cursor-pointer">
        <div className="hover:bg-black hover:bg-opacity-25 w-full h-full absolute ease-in-out duration-300"></div>
        <img
          src="https://i.redd.it/b7mn2w7hnpv51.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 p-1 font-semibold text-xl md:text-3xl">
          Teams
        </div>
      </Link>
    </div>
    </>
  );
}
