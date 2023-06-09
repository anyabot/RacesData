import { configureStore } from '@reduxjs/toolkit';
import raceReducer from './store/raceSlice';
import teamReducer from './store/teamSlice';
import driverReducer from './store/driverSlice';

export const store = configureStore({
  reducer: {
    races: raceReducer,
    teams: teamReducer,
    drivers: driverReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;