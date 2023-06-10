"use client";

import { debounce } from "lodash";

import { Input } from "@material-tailwind/react";
import { selectTeams2, selectTeamImg } from "@/store/teamSlice";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";
import CardLink from "@/components/utils/CardLink";
import PopoverYear from "@/components/utils/PopoverYear";
import Image from 'next/image';

export default function Home() {
  const teams = useAppSelector(selectTeams2);
  const teamImg = useAppSelector(selectTeamImg);
  const allTeams: string[] = Object.keys(teams);
  const [searchTerm, setSearch] = useState("");
  const [filterYears, setFilterYears] = useState<string[]>([]);
  
  const getFiltered = () => {
    const temp = allTeams.filter((e) =>
      e.toLowerCase().includes(searchTerm.toLowerCase()) && (filterYears.length == 0 || filterYears.some(year => year in teams[e]))
    );
    return temp;
  };

  const handleSearch = debounce((e: string) => setSearch(e), 300);
  useEffect(() => {document.title = "F1 Search By Teams"}, [])
  return (
    <>
      <div className="mx-auto my-4 text-4xl ld:text-6xl font-extrabold">
        F1 Search By Teams
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
        {getFiltered().map(e => <CardLink key={e} text={e} img={teamImg[e]} href={`/teams/${e}`}/>)}
      </div>
    </>
  );
}
