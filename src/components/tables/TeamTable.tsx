"use client"

import { Team } from '@/interfaces/interfaces';
import Link from 'next/link';

import { Card, Typography } from "@material-tailwind/react";

export default function TeamTable({teams}: {teams: Team[]}) {

  const TABLE_HEAD = ["Position", "Team", "Point"]
  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map(({ position, team, point }) => (
            <tr key={position + team} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {position}
                </Typography>
              </td>
              <td className="p-4">
              <Link href={`teams/${team}`}>
                <Typography variant="small" color="red" className="font-normal">
                  {team}
                </Typography>
                </Link>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                  {point}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
