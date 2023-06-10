"use client";

import { debounce } from "lodash";

import { Select, Option, Input } from "@material-tailwind/react";

import { selectRaces } from "@/store/raceSlice";
import { selectDrivers2, selectDriverImg } from "@/store/driverSlice";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";
import CardLink from "@/components/utils/CardLink";
import PopoverYear from "@/components/utils/PopoverYear";

export default function Home() {
  const drivers = useAppSelector(selectDrivers2);
  const allDrivers: string[] = Object.keys(drivers);
  const driverImg = useAppSelector(selectDriverImg);
  const [searchTerm, setSearch] = useState("");
  const [filterYears, setFilterYears] = useState<string[]>([]);
  
  const getFiltered = () => {
    const temp = allDrivers.filter((e) =>
      e.toLowerCase().includes(searchTerm.toLowerCase()) && (filterYears.length == 0 || filterYears.some(year => year in drivers[e]))
    );
    return temp;
  };

  const handleSearch = debounce((e: string) => setSearch(e), 300);
  useEffect(() => {document.title = "F1 Search By Drivers"}, [])
  
  return (
    <>
      <div className="mx-auto my-4 text-4xl ld:text-6xl font-extrabold">
        F1 Search By Drivers
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">

        <div className="inline-block">
          <Input
            label="Search Term"
            onChange={(e) => (e ? handleSearch(e.target.value) : null)}
          />
        </div>
        <div className="inline-block">
          <PopoverYear callback={setFilterYears}/>
        </div>
      </div>
      <div className="w-full mt-4 mb-8 columns-2 md:columns-3 lg:columns-4 gap-4">
        {getFiltered().map(e => <CardLink key={e} text={e} img={driverImg[e]} href={`/drivers/${e}`}/>)}
      </div>
    </>
  );
}
