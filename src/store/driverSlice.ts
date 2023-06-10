import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Driver } from "@/interfaces/interfaces";
import drivers from "../../public/drivers.json"
import drivers2 from "../../public/drivers_2.json"
import driver_img from "../../public/drivers_img.json"

export interface Drivers {
  drivers: {
    [key: string]: Driver[]
  };
  drivers2: {
    [key: string]: {[key: string]: Driver}
  };
  driver_img: {[key:string]: string}
}

const initialState: Drivers = {
  drivers: drivers,
  drivers2: drivers2,
  driver_img: driver_img
};

export const DriverSlice = createSlice({
  name: "driver",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const {

} = DriverSlice.actions;
export const selectDrivers = (state: RootState) => state.drivers.drivers;
export const selectDrivers2 = (state: RootState) => state.drivers.drivers2;
export const selectDriverImg = (state: RootState) => state.drivers.driver_img;

export default DriverSlice.reducer;
