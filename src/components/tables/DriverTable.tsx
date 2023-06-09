import { Driver } from '@/interfaces/interfaces';


import { Card, Typography } from "@material-tailwind/react";

export default function DriverTable({drivers}: {drivers: Driver[]}) {

  const TABLE_HEAD = ["Position", "Driver", "Nationality", "Car", "Point"]
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
          {drivers.map(({ position, driver, nationality, car, point }) => (
            <tr key={position + driver} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {position}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="red" className="font-normal">
                  {driver}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {nationality}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                  {car}
                </Typography>
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
