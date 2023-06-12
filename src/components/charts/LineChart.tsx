"use client";

import { Driver, Team } from '@/interfaces/interfaces';

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
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from 'react-chartjs-2';

import { selectDrivers2 } from "@/store/driverSlice";
import { selectTeams2 } from "@/store/teamSlice";
import { useAppSelector } from "@/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Ranking and Points each year",
    },
    datalabels: {
      align: 'top' as "top",
    },
  },
  scales: {
    y1: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      reverse: true,
    },
    y2: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

interface Props {
  mode: "driver" | "team"
  name: string
}

export default function LineChart({mode, name}: Props) {
  const drivers = useAppSelector(selectDrivers2);
  const teams = useAppSelector(selectTeams2);
  let dataSet1
  let dataSet2
  let labels
  if (!name) return null;
  if (!(name in drivers) && !(name in teams)) return null;
  switch (mode) {
    case "driver":
      labels = Object.keys(drivers[name]);
      dataSet1 = labels.map((e) => Number(drivers[name][e].position))
      dataSet2 = labels.map((e) => Number(drivers[name][e].point))
      break
    case "team":
        labels = Object.keys(teams[name]);
        dataSet1 = labels.map((e) => Number(teams[name][e].position))
        dataSet2 = labels.map((e) => Number(teams[name][e].point))
        break
  }
  const data = {
    labels, 
      datasets: [
        {
          label: "Ranking",
          data: dataSet1,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          yAxisID: "y1",
        },
        {
          label: "Point",
          data: dataSet2,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          yAxisID: "y2",
        },
    ]
  }

  
  return <Line options={options} data={data} />
}
