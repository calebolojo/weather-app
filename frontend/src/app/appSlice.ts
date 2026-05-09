import { createSlice, type ActionReducerMapBuilder } from "@reduxjs/toolkit";

export interface AppSliceState {
  city: string | null;
  activeView: "metrics" | "map" | "search";
}

const initialState: AppSliceState = {
  city: null,
  activeView: "metrics",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    clearCitySearch: (state: AppSliceState) => {
      state.city = null;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setLocationToSearch: () => {},
    setActiveView: (state, action) => {
      state.activeView = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<AppSliceState>) => {},
});

export const { setCity, clearCitySearch, setLocationToSearch, setActiveView } =
  appSlice.actions;

export default appSlice.reducer;
