import openWeatherApi from "@/services/api/openWeatherApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface FetchLocationWeatherParams {
  city: string;
  country: string;
  units?: "metric" | "imperial" | "standard";
}

export const fetchLocationWeatherMetrics = createAsyncThunk(
  "metrics/fetchData",
  async (
    { city, country = "US", units = "imperial" }: FetchLocationWeatherParams,
    { rejectWithValue },
  ) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    try {
      // Get geo location
      const geo = await openWeatherApi.get(
        `/geo/1.0/direct?q=${city},${country}&limit=1&appid=${apiKey}`,
      );
      const { lat, lon } = geo.data[0];
      // Get weather data
      const res = await openWeatherApi.get(
        `data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`,
      );

      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ?? "Failed to fetch weather data",
      );
    }
  },
);
