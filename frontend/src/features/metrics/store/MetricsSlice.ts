import { createSlice, type ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchLocationWeatherMetrics } from "./MetricsThunks";
import type { WeatherMetricsData } from "@/types/WeatherType";

export type statusType = "idle" | "loading" | "succeeded" | "failed";

// export interface WeatherMetricsData {

// }

export interface MetricsSliceState {
  data?: WeatherMetricsData;
  error?: boolean | null | string;
  status?: statusType;
}

const initialState: MetricsSliceState = {
  data: {},
  error: null,
  status: "idle",
};

export const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    setWeatherMetricsData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<MetricsSliceState>) => {
    builder
      .addCase(fetchLocationWeatherMetrics.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLocationWeatherMetrics.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchLocationWeatherMetrics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string; // ← rejectWithValue msg
      });
  },
});

export const { setWeatherMetricsData } = metricsSlice.actions;

export default metricsSlice.reducer;
