"use client";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card } from "@material-tailwind/react";
import Error from "next/error";
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

import { selectDrivers2 } from "@/store/driverSlice";

import { useState, useEffect } from "react";
import { useAppSelector } from "@/hooks";
import { useRouter, useParams } from "next/navigation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Ranking and Points each year',
    },
  },
  scales: {
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      reverse: true
    },
    y2: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export default function Home() {
  const drivers = useAppSelector(selectDrivers2);
  const [name, setName] = useState("");

  const params = useParams();
  useEffect(() => {
    let temp = decodeURI(params.id as string);
    setName(temp);
    document.title = "Driver | " + temp
  }, [params.id]);
  if (!name) return null;
  if (!(name in drivers)) return <Error statusCode={404} />
  const labels = Object.keys(drivers[name])
  const data = {
    labels, 
      datasets: [
      {
        label: 'Ranking',
        data: labels.map((e) => Number(drivers[name][e].position)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Point',
        data: labels.map((e) => Number(drivers[name][e].point)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y2',
      },
    ]
  }
  const averageRanking = () => {
    let sum = 0
    let count = 0
    for (let year in drivers[name]) {
      sum += Number(drivers[name][year].position)
      count += 1
    }
    return sum / count
  }
  const averagePoint = () => {
    let sum = 0
    let count = 0
    for (let year in drivers[name]) {
      sum += Number(drivers[name][year].point)
      count += 1
    }
    return sum / count
  }
  
  return (
    <>
      <div className="mx-auto my-4 text-4xl ld:text-6xl font-extrabold">
      <Link href="/teams" className="mx-4 inline-block"><ArrowLeftCircleIcon className="w-8 h-8"/></Link>
        {name}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">

        <div className="inline-block md:row-span-2">
        <img src="https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg" alt={name} className="max-h-full mx-auto"/>
        </div>
        <div className="inline-block md:col-span-2">
          <Card className="p-4">
          <table className="table-auto w-full text-2xl">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 m-4">
                <td className="font-semibold">Year Participating</td>
                
              </tr>
              <tr className="m-4">
                  {Object.keys(drivers[name]).join(", ")}
                  </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 m-4">
                <td className="font-semibold">Average Ranking</td>
                
              </tr>
              <tr className="m-4">
                  {averageRanking()}
                  </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 m-4">
              <td className="font-semibold">Average Point</td>

              </tr>
              <tr className="m-4">
                  {averagePoint()}
                  </tr>
            </tbody>
          </table>
          </Card>
          </div>
          <div className="inline-block md:col-span-2">
          <Line options={options} data={data} />;
        </div>
      </div>
    </>
  );
}
