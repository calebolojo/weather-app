import { combineReducers } from "@reduxjs/toolkit";
import weatherAlertReducer from "../features/weather-alert/WeatherAlertSlice";

export const rootReducer = combineReducers({
  weatherAlert: weatherAlertReducer,
});
