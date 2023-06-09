"use client";

import { Driver, Team } from '@/interfaces/interfaces';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from 'react-chartjs-2';

import { selectDrivers } from "@/store/driverSlice";
import { selectTeams } from "@/store/teamSlice";
import { useAppSelector } from "@/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend,
  Colors
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Point Acquired',
    },
    datalabels: {
      anchor: 'end' as "end",
      align: 'top' as "top",
    },
    colors: {
      forceOverride: true
    }
  },
};

interface Props {
  mode: "driver" | "team"
  year: string
}

export default function BarChart({mode, year}: Props) {
  const drivers = useAppSelector(selectDrivers);
  const teams = useAppSelector(selectTeams);
  let dataSet: Driver[] | Team[]
  let labels
  switch (mode) {
    case "driver":
      dataSet = drivers[year]
      labels = dataSet.map(dat => dat.driver)
      break
    case "team":
        dataSet = teams[year]
        labels = dataSet.map(dat => dat.team)
        break
  }
  const data = {
    labels, 
      datasets: [
      {
        label: 'Point',
        data: dataSet.map((e) => Number(e.point)),
      },
    ]
  }

  
  return <Bar options={options} data={data} />
}
