import type { Temp } from "@/types/WeatherType";
import { TiWeatherCloudy } from "react-icons/ti";
import TemperatureLineRange from "./charts/TemperatureLineRange";
import { cn } from "@/lib/utils";
import styled from "styled-components";

export interface TemperatureStatStatProps extends Partial<Temp> {
  layout: "HORIZONTAL" | "VERTICAL";
}


const TemperatureStat = ({
  layout,
  day,
  min,
  max,
}: TemperatureStatStatProps) => {

  return (
    <div className="overflow-x-auto">
      <div
        className={cn(
          "flex",
          layout === "VERTICAL"
            ? "flex-col"
            : "flex-row gap-6  overflow-x-auto",
        )}
      >
        <p>{day}</p>
        <div>
          <TiWeatherCloudy size={40} />
        </div>
        <div>
          <TemperatureLineRange
            low={min}
            high={max}
            showRangeChart={layout === "HORIZONTAL"}
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureStat;
