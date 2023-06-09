import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Race } from "@/interfaces/interfaces";
import races from "../../public/races.json"

export interface Races {
  races: {
    [key: string]: Race[]
  };
}

const initialState: Races = {
  races: races
};

export const RaceSlice = createSlice({
  name: "race",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const {

} = RaceSlice.actions;
export const selectRaces = (state: RootState) => state.races.races;

export default RaceSlice.reducer;
