"use client";

import { debounce } from "lodash";

import Head from "next/head";
import { Input } from "@material-tailwind/react";
import { selectTeams2 } from "@/store/teamSlice";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";
import CardLink from "@/components/utils/CardLink";
import PopoverYear from "@/components/utils/PopoverYear";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

export default function Home() {
  const teams = useAppSelector(selectTeams2);
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
  document.title = "F1 Search By Teams"
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
      <div className="w-full  my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {getFiltered().map(e => <CardLink text={e} img="https://cdn-8.motorsport.com/images/mgl/Y99JQRbY/s8/red-bull-racing-logo-1.jpg" href={`/teams/${e}`}/>)}
      </div>
    </>
  );
}
