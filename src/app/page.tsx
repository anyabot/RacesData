"use client";
import Link from "next/link";
import Head from "next/head";
import { Select, Option } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";

import { selectDrivers2 } from "@/store/driverSlice";
import { selectTeams2 } from "@/store/teamSlice";
import BarChart from "@/components/charts/BarChart";
import LineChart from "@/components/charts/LineChart";
import PieChart from "@/components/charts/PieChart";
import AnimateOnScroll from "@/components/utils/AnimateOnScroll";
export default function Home() {
  useEffect(() => {document.title = "F1 Search Main Page"}, [])
  const drivers = useAppSelector(selectDrivers2);
  const allDrivers: string[] = Object.keys(drivers);
  const teams = useAppSelector(selectTeams2);
  const allTeams: string[] = Object.keys(teams);
  const [driver, setDriver] = useState("Max Verstappen");
  const [team, setTeam] = useState("Mercedes");
  return (
    <>
    <AnimateOnScroll reappear={true} threshold={[0.3, 0.5]}>
    <div className="font-semibold my-6 text-3xl md:text-6xl">Search for Formula 1 Data You Want</div>
    <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 text-white">
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
    </AnimateOnScroll>
    <AnimateOnScroll reappear={true} threshold={[0.3, 0.5]}>
    <div className="font-semibold my-3 text-2xl md:text-4xl">Current Season</div>
    <div className="grid md:grid-cols-2 w-full gap-4">
      <div className="overflow-auto">
      <div className="font-semibold my-3 text-lg md:text-2xl">Individual Results</div>
      <BarChart mode="driver" year="2023"/>
      </div>
      <div className="overflow-auto">
      <div className="font-semibold my-3 text-lg md:text-2xl">Team Results</div>
      <BarChart mode="team" year="2023"/>
      </div>
      <div className="overflow-auto">
      <div className="font-semibold my-3 text-lg md:text-2xl">Winner Distribution</div>
      <PieChart mode="winner" year="2023"/>
      </div>
      <div className="overflow-auto">
      <div className="font-semibold my-3 text-lg md:text-2xl">Nationality Distribution</div>
      <PieChart mode="driver" year="2023"/>
      </div>
    </div>
    </AnimateOnScroll>
    <AnimateOnScroll reappear={true} threshold={[0.3, 0.5]}>
    <div className="font-semibold my-3 text-2xl md:text-4xl">Result History</div>
    <div className="grid md:grid-cols-2 w-full gap-4">
      <div className="overflow-auto">
      <div className="font-semibold my-3 text-lg md:text-2xl">Driver</div>
      <Select
            label="Select Driver"
            value={driver}
            onChange={(e) => (e ? setDriver(e) : null)}
          >
            {allDrivers.map(e => <Option key={e} value={e}>
                {e}
              </Option>)}
          </Select>
          <LineChart mode="driver" name={driver}/>
      </div>
      <div className="overflow-auto">
      <div className="font-semibold my-3 text-lg md:text-2xl">Team</div>
      <Select
            label="Select Team"
            value={team}
            onChange={(e) => (e ? setTeam(e) : null)}
          >
            {allTeams.map(e => <Option key={e} value={e}>
                {e}
              </Option>)}
          </Select>
          <LineChart mode="team" name={team}/>
      </div>
      
    </div>
    </AnimateOnScroll>
    </>
  );
}
