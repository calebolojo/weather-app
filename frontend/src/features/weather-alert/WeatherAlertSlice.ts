import { createSlice, type ActionReducerMapBuilder } from "@reduxjs/toolkit";

export interface WeatherAlertState {
  status?: string;
  error: boolean | null;
}

const initialState: WeatherAlertState = {
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const weatherAlertSlice = createSlice({
  name: "weatherAlert",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<WeatherAlertState>) => {},
});

export const { clearError } = weatherAlertSlice.actions;
export default weatherAlertSlice.reducer;
