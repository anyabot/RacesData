"use client";

import { Driver, Team, Race } from '@/interfaces/interfaces';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import ChartDataLabels from "chartjs-plugin-datalabels";
import {Context} from 'chartjs-plugin-datalabels';

import { selectDrivers } from "@/store/driverSlice";
import { selectTeams } from "@/store/teamSlice";
import { useAppSelector } from "@/hooks";
import { selectRaces } from '@/store/raceSlice';

ChartJS.register(
  ArcElement, Tooltip, Legend, ChartDataLabels, Colors
);

interface Props {
  mode: "driver" | "winner"
  year: string
}

export default function PieChart({mode, year}: Props) {
  const drivers = useAppSelector(selectDrivers);
  const races = useAppSelector(selectRaces)
  const teams = useAppSelector(selectTeams);
  let dataSet: Driver[] | Team[] | Race[]
  let labels
  let label
  let title
  let appearances: {[key: string]: number} = {}
  switch (mode) {
    case "driver":
      dataSet = drivers[year]
      labels = Array.from(new Set(dataSet.map(dat => {
        let nat = dat.nationality
        if (nat in appearances) appearances[nat] += 1
        else appearances[nat] = 1
        return nat
      })))
      label = 'Number of Winners'
      title = "Nationality Distribution"
      break
    case "winner":
      dataSet = races[year]
      labels = Array.from(new Set(dataSet.map(dat => {
        let nat = dat.winner
        if (nat in appearances) appearances[nat] += 1
        else appearances[nat] = 1
        return nat
      })))
      label = "Number of Grand Prix Won"
      title = "Winner Distribution"
      break
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: title,
      },
      datalabels: {
          formatter: function(value: number, context: Context) {
              return context.chart.data.labels![context.dataIndex] + ": " + value;
        }
      }
    },
  };
  const data = {
    labels, 
      datasets: [
      {
        label: label,
        data: labels.map((e) => appearances[e]),
      },
    ]
  }

  
  return <Pie options={options} data={data} />
}
