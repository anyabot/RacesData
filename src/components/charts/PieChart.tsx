"use client";

import { Driver, Team } from '@/interfaces/interfaces';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import ChartDataLabels from "chartjs-plugin-datalabels";
import {Context} from 'chartjs-plugin-datalabels';

import { selectDrivers } from "@/store/driverSlice";
import { selectTeams } from "@/store/teamSlice";
import { useAppSelector } from "@/hooks";

ChartJS.register(
  ArcElement, Tooltip, Legend, ChartDataLabels, Colors
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Nationality',
    },
    datalabels: {
        formatter: function(value: number, context: Context) {
            return context.chart.data.labels![context.dataIndex] + ": " + value;
      }
    }
  },
};

interface Props {
  mode: "driver"
  year: string
}

export default function PieChart({mode, year}: Props) {
  const drivers = useAppSelector(selectDrivers);
  const teams = useAppSelector(selectTeams);
  let dataSet: Driver[] | Team[]
  let labels
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
      break
  }
  const data = {
    labels, 
      datasets: [
      {
        label: 'Number of Winners',
        data: labels.map((e) => appearances[e]),
      },
    ]
  }

  
  return <Pie options={options} data={data} />
}
