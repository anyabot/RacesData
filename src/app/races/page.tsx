"use client";

import { Race } from "@/interfaces/interfaces";
import { debounce } from "lodash";

import Head from "next/head";
import { Select, Option, Input } from "@material-tailwind/react";
import RaceTable from "@/components/tables/RaceTable";

import { selectRaces } from "@/store/raceSlice";

import { useState } from "react";
import { useAppSelector } from "@/hooks";

export default function Home() {
  const races = useAppSelector(selectRaces);
  let allRaces: Race[] = [];
  Object.keys(races).forEach((e) => (allRaces = [...allRaces, ...races[e]]));

  const [mode, setMode] = useState("prix");
  const [searchTerm, setSearch] = useState("");
  const getFiltered = () => {
    switch (mode) {
      case "prix": {
        const temp = allRaces.filter((e) =>
          e.prix.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return temp;
      }
      case "winner": {
        const temp = allRaces.filter((e) =>
          e.winner.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return temp;
      }
      case "car": {
        const temp = allRaces.filter((e) =>
          e.car.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return temp;
      }
    }
    return allRaces;
  };

  const handleSearch = debounce((e: string) => setSearch(e), 300);
  document.title = "F1 Search By Races"
  return (
    <>
      <div className="mx-auto my-4 text-4xl ld:text-6xl font-extrabold">
        F1 Search By Races
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
        <div className="inline-block">
          <Select
            label="Select Search Category"
            value={mode}
            onChange={(e) => (e ? setMode(e) : null)}
          >
            <Option value="prix">Grand Prix</Option>
            <Option value="winner">Winner</Option>
            <Option value="car">Car</Option>
          </Select>
        </div>
        <div className="inline-block">
          <Input
            label="Search Term"
            onChange={(e) => (e ? handleSearch(e.target.value) : null)}
          />
        </div>
      </div>
      <div className="w-full  my-4">
        <RaceTable races={getFiltered()} />
      </div>
    </>
  );
}
