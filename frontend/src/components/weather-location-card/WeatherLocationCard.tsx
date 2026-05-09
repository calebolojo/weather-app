import React from "react";

export interface WeatherLocationCardProps {
  city: string;
  localTime: string;
  localTimeZone?: string;
  temperature?: number;
  temperatureDegreeType?: string;
  weatherCondition?: string;
  pressureHigh?: number;
  pressureLow?: number;
}

const WeatherLocationCard = ({
  city = "Los Angeles",
  localTime = "10:11",
  localTimeZone = "PST",
  temperature = 21,
  temperatureDegreeType = "F",
  weatherCondition = "Sunny",
  pressureHigh = 21,
  pressureLow = -4,
}: WeatherLocationCardProps) => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h5>{city}</h5>
          <p>
            {localTime}&nbsp;
            {localTimeZone}
          </p>
        </div>
        <div>
          <h5>
            {temperature}&deg;{temperatureDegreeType}
          </h5>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <span>{weatherCondition}</span>
        </div>
        <div className="flex justify-between">
          <span>H: {pressureHigh}&deg;</span>
          <span>L: {pressureLow}&deg;</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherLocationCard;
