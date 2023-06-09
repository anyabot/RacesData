import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography
} from "@material-tailwind/react";

import { selectRaces } from '@/store/raceSlice';
import { selectDrivers } from '@/store/driverSlice';
import { selectTeams } from '@/store/teamSlice';

import { FormEvent, useState } from 'react';
import { useAppSelector } from '@/hooks';

interface Props {
  callback: (v: string[]) => void 
}
 
export default function PopoverYear({callback}: Props) {
  const races = useAppSelector(selectRaces)
  const years = Object.keys(races)
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (event: FormEvent<HTMLLabelElement>) => {
    var updatedList = [...checked];
    let target = event.target as HTMLInputElement
    if (target.checked) {
      updatedList = [...checked, target.value];
    } else {
      updatedList.splice(checked.indexOf(target.value), 1);
    }
    console.log(target.value, updatedList)
    setChecked(updatedList);
    callback(updatedList)
  };
  return (
    <Popover>
      <PopoverHandler>
        <Button>Filter by Years</Button>
      </PopoverHandler>
      <PopoverContent className="max-h-[500px] overflow-auto">
      <List>
        {years.map(y => 
        <ListItem className="p-0" key={y}>
          <label htmlFor={y} className="px-3 py-2 flex items-center w-full cursor-pointer" onChange={e => handleCheck(e)}>
            <ListItemPrefix className="mr-3">
              <Checkbox 
                id={y} 
                ripple={false} 
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0"
                }}
                value={y}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium">{y}</Typography>
          </label>
        </ListItem>
        )}
      </List>
      </PopoverContent>
    </Popover>
  );
}
