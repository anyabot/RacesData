"use client";

import React from "react";
import { Card } from "@material-tailwind/react";
import Error from "next/error";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { selectDrivers2, selectDriverImg } from "@/store/driverSlice";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";
import { useRouter, useParams } from "next/navigation";
import CountryFlag from "@/components/utils/CountryFlag";
import LineChart from "@/components/charts/LineChart";

export default function Home() {
  const drivers = useAppSelector(selectDrivers2);
  const driverImg = useAppSelector(selectDriverImg);
  const [name, setName] = useState("");

  const params = useParams();
  useEffect(() => {
    let temp = decodeURI(params.id as string);
    setName(temp);
    document.title = "Driver | " + temp;
  }, [params.id]);
  if (!name) return null;
  if (!(name in drivers)) return <Error statusCode={404} />;

  const averageRanking = () => {
    let sum = 0;
    let count = 0;
    for (let year in drivers[name]) {
      sum += Number(drivers[name][year].position);
      count += 1;
    }
    if (count == 0) return "No Data";
    return Math.round((sum / count) * 100) / 100;
  };
  const averagePoint = () => {
    let sum = 0;
    let count = 0;
    for (let year in drivers[name]) {
      sum += Number(drivers[name][year].point);
      count += 1;
    }
    if (count == 0) return "No Data";
    return Math.round((sum / count) * 100) / 100;
  };

  return (
    <>
      <div className="mx-auto my-4 text-4xl ld:text-6xl font-extrabold">
        <Link href="/drivers" className="mx-4 inline-block">
          <ArrowLeftCircleIcon className="w-8 h-8" />
        </Link>
        {name}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
        <div className="inline-block md:row-span-2">
          <img
            src={driverImg[name]}
            alt={name}
            className="max-h-full mx-auto"
          />
        </div>
        <div className="inline-block md:col-span-2">
          <Card className="p-4">
            <table className="table-auto w-full text-2xl">
              <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 m-4">
                  <td className="font-semibold">
                    Nationality
                  </td>
                </tr>
                <tr className="m-4"><td><CountryFlag country={drivers[name][Object.keys(drivers[name])[0]].nationality}/></td></tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 m-4">
                  <td className="font-semibold">
                    {"Year Participating: " + Object.keys(drivers[name]).length}{" "}
                  </td>
                </tr>
                <tr className="m-4"><td>{Object.keys(drivers[name]).join(", ")}</td></tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 m-4">
                  <td className="font-semibold">Average Ranking</td>
                </tr>
                <tr className="m-4"><td>{averageRanking()}</td></tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 m-4">
                  <td className="font-semibold">Average Point</td>
                </tr>
                <tr className="m-4"><td>{averagePoint()}</td></tr>
              </tbody>
            </table>
          </Card>
        </div>
        <div className="inline-block md:col-span-2 overflow-auto">
          <LineChart mode="driver" name={name}/>
        </div>
      </div>
    </>
  );
}
