import { combineReducers } from "@reduxjs/toolkit";
import weatherAlertReducer from "../features/weather-alert/WeatherAlertSlice";
import metricsReducer from "../features/metrics/store/MetricsSlice";
import appReducer from "./appSlice";

export const rootReducer = combineReducers({
  weatherAlert: weatherAlertReducer,
  app: appReducer,
  metrics: metricsReducer,
});
