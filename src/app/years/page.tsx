"use client";

import { Select, Option, Card, Typography } from "@material-tailwind/react";
import RaceTable from "@/components/tables/RaceTable";
import DriverTable from "@/components/tables/DriverTable";
import TeamTable from "@/components/tables/TeamTable";
import BarChart from "@/components/tables/BarChart";

import { selectRaces } from "@/store/raceSlice";
import { selectDrivers } from "@/store/driverSlice";
import { selectTeams } from "@/store/teamSlice";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";

export default function Home() {
  const races = useAppSelector(selectRaces);
  const drivers = useAppSelector(selectDrivers);
  const teams = useAppSelector(selectTeams);
  const years = Object.keys(races);
  const [currYear, setYear] = useState("2023");
  const [mode, setMode] = useState("race");
  const TABLE_HEAD = ["Grand Prix", "Date", "Winner", "Car", "Point", "Time"];
  function switchMode() {
    switch (mode) {
      case "race":
        return <RaceTable races={races[currYear]} />;
      case "driver":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <BarChart mode="driver" year={currYear} />
            <DriverTable drivers={drivers[currYear]} />

          </div>
        );
      case "team":
        return (
          <div className="grid md:grid-cols-2 gap-4">
            <BarChart mode="team" year={currYear} />
            <TeamTable teams={teams[currYear]} />

            </div>
        );
    }
  }
  useEffect(() => {
    document.title = "F1 Search By Years";
  }, []);
  return (
    <>
      <div className="mx-auto my-4 text-4xl ld:text-6xl font-extrabold">
        Seach Formula 1 Data
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2">
        <div className="inline-block">
          <Select
            label="Select Year"
            value={currYear}
            onChange={(e) => (e ? setYear(e) : null)}
          >
            {years.map((e) => (
              <Option key={e} value={e}>
                {e}
              </Option>
            ))}
          </Select>
        </div>
        <div className="inline-block">
          <Select
            label="Select Data"
            value={mode}
            onChange={(e) => (e ? setMode(e) : null)}
          >
            <Option value="race">Races</Option>
            <Option value="driver">Drivers</Option>
            <Option value="team">Teams</Option>
          </Select>
        </div>
      </div>
      <div className="w-full  my-4">{switchMode()}</div>
    </>
  );
}
