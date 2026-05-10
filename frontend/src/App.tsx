import "./App.css";

import { PanelRightOpen, Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/@/components/ui/input-group";
import { cn } from "@/lib/utils";
import styled from "styled-components";
import { useEffect, useState } from "react";
import WeatherLocationCard from "./components/weather-location-card/WeatherLocationCard";
import Metrics from "./containers/Metrics";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectActiveView } from "./app/appSelectors";
import { Button } from "./@/components/ui/button";
import { setActiveView } from "./app/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  // fetchLocationWeatherMetrics,
  setWeatherMetricsData,
} from "./features/metrics/store";
import staticWeatherMetricsData from "./data/weather-data.json";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const activeView = useAppSelector(selectActiveView);
  const city = searchParams.get("city") || "Atlanta";
  const country = searchParams.get("country") || "US";

  useEffect(() => {
    const fetch = async () => {
      if (city && city.length > 0 && country && country.length > 0) {
        // const result = await dispatch(
        //   fetchLocationWeatherMetrics({
        //     city,
        //     country,
        //   }),
        // );
        const result = staticWeatherMetricsData;
        dispatch(setWeatherMetricsData(result));
        console.log("inUseEffect---", result);
      }
    };
    fetch();
  }, [city]);

  return (
    <div className="relative flex">
      <div className="relative flex w-screen h-screen overscroll-none">
        <Container>
          {/* Header */}
          <div className="view-header flex align-middle">
            <div className="logo">
              <h2>Weather App</h2>
            </div>
            <div className="menu flex">
              <div className="flex gap-4">
                <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <PanelRightOpen />
                </Button>
                <button>Browse</button>
                <button>Map</button>
                <button onClick={() => dispatch(setActiveView("metrics"))}>
                  Metrics
                </button>
              </div>
            </div>
            <div className="tools">Search settings</div>
          </div>
          {/* END */}
          {/* BODY */}
          <div className="view-body">
            {/* SIDEBAR */}
            <div className={cn("sidebar px-6", isSidebarOpen && "open")}>
              <div className="sidebar__head relative"></div>
              <div className="sidebar__body">
                <div className="search-box">
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                      <Search />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      12 results
                    </InputGroupAddon>
                  </InputGroup>
                </div>
                <WeatherLocationCard city="Atlanta" localTime="01:31" />
              </div>
            </div>
            {/* END */}
            {/* MAIN */}
            <div className="main">
              {activeView === "metrics" && (
                <Metrics
                  city={city}
                  country={country}
                />
              )}
            </div>
            {/* END */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default App;
