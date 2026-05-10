import { useAppSelector } from "@/app/hooks";
import { selectWeatherMetricsData } from "@/features/metrics/store";
import "./Metrics.scss";
import type { Temp } from "@/types/WeatherType";
import TemperatureStat from "@/components/common/TemperatureStat";
import { FiHome } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import UvIndex from "@/features/metrics/uv-index/UvIndex";
import Sunrise from "@/features/metrics/sunrise/Sunrise";
import Visibility from "@/features/metrics/visibility/Visibility";
import Averages from "@/features/metrics/averages/Averages";
import RainFall from "@/features/metrics/rainfall/RainFall";
import Wind from "@/features/metrics/wind/Wind";
import AirQuality from "@/features/metrics/air-quality/AirQuality";
import Humidity from "@/features/metrics/humidity/Humidity";
import FeelsLike from "@/features/metrics/feels-like/FeelsLike";
import Pressure from "@/features/metrics/pressure/Pressure";
import Precipitation from "@/features/metrics/precipitation/Precipitation";
import moment from "moment";
import { getCurrentGreeting } from "@/utils/greeting";
import { WiDayCloudy } from "react-icons/wi";
import CreateWeatherAlert from "@/features/weather-alert/CreateWeatherAlert";

const dayTemperatureStat: Partial<Temp>[] = [
  {
    day: 1,
    min: -2,
    max: 4,
  },
  {
    day: 2,
    min: -2,
    max: 4,
  },
  {
    day: 3,
    min: -2,
    max: 4,
  },
  {
    day: 4,
    min: -2,
    max: 4,
  },
  {
    day: 5,
    min: -2,
    max: 4,
  },
  {
    day: 6,
    min: -2,
    max: 4,
  },
  {
    day: 7,
    min: -2,
    max: 4,
  },
];

const sevenDayForecast: Partial<Temp>[] = [
  {
    day: 1,
    min: -2,
    max: 4,
  },
  {
    day: 2,
    min: -2,
    max: 4,
  },
  {
    day: 3,
    min: -2,
    max: 4,
  },
  {
    day: 4,
    min: -2,
    max: 4,
  },
  {
    day: 5,
    min: -2,
    max: 4,
  },
  {
    day: 6,
    min: -2,
    max: 4,
  },
  {
    day: 7,
    min: -2,
    max: 4,
  },
];

export interface MetricsProps {
  city?: string;
  country?: string;
}
function Metrics({ city, country }: MetricsProps) {
  const weatherData = useAppSelector(selectWeatherMetricsData);
  // const [showWeatherAlertForm, setShowWeatherAlertForm] = useState(false);

  const {
    current,
    lat,
    lon,
    timezone,
    timezone_offset,
    minutely,
    hourly,
    daily,
  } = weatherData;

  // @ts-ignore
  if (weatherData.status === "loading") {
    return "Loading metrics";
  }

  return (
    <div className="relative flex h-screen overscroll-none">
      <div className="main">
        {/* HEAD */}
        <div className="head">
          <div>
            <h4>Good {getCurrentGreeting()}</h4>
          </div>
          <div className="flex justify-between">
            <div>
              <h2>
                {city}, {country}
              </h2>
              <p>{moment.unix(current?.dt).format("LLLL")}</p>
              <div>
                <CreateWeatherAlert />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div>
                  <WiDayCloudy size={100} />
                </div>
                <div>
                  <h1>{current?.temp}&deg;</h1>
                  <p>{current?.weather[0].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END */}
        <div className="metrics">
          {/* <div className="column1"> */}
          <div className="metric-widget base ">
            <div className="metric-widget-wrap">
              <div className="metric-widget__head">
                <div className="flex items-center">
                  <div>
                    <FiHome />
                  </div>
                  <p>
                    Home <span>&middot;</span> {city}
                  </p>
                </div>
              </div>
              <div className="metric-widget__body">
                <div className="figure">
                  <h3>{current?.temp}&deg;</h3>
                  <p>{current?.weather[0].description}</p>
                </div>
                <div className="">
                  <div className="flex gap-6">
                    {hourly?.map((stat, i: number) => {
                      const { temp, dt } = stat;
                      return (
                        <TemperatureStat
                          key={i}
                          layout="VERTICAL"
                          min={temp}
                          max={temp}
                          day={dt}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-1-right">
            <div className="metric-widget uv-index">
              <UvIndex />
            </div>
            <div className="metric-widget sunrise">
              <Sunrise />
            </div>
            <div className="metric-widget visibility">
              <Visibility />
            </div>
          </div>
          <div className="metric-widget seven-day-forecast">
            <div className="metric-widget-wrap">
              <div className="metric-widget__head">
                <div className=" flex items-center">
                  <div>
                    <FaRegCalendarAlt />
                  </div>
                  <div>
                    <p>7 - Day Forecast</p>
                  </div>
                </div>
              </div>
              <div className="metric-widget__body">
                <div className="flex flex-col gap-6">
                  {sevenDayForecast.map((stat, i: number) => {
                    const { min, max, day } = stat;
                    return (
                      <TemperatureStat
                        key={i}
                        layout="HORIZONTAL"
                        min={min}
                        max={max}
                        day={day}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="row-2-right">
            <div className="metric-widget pressure">
              <FeelsLike />
            </div>
            <div className="metric-widget averages">
              <Averages />
            </div>
            <div className="metric-widget rainfall">
              <RainFall />
            </div>
            <div className="metric-widget wind">
              <Wind />
            </div>
            <div className="metric-widget air-quality">
              <AirQuality />
            </div>
            <div className="metric-widget humidity">
              <Humidity />
            </div>
            <div className="metric-widget pressure">
              <Pressure />
            </div>
            <div className="metric-widget precipitation">
              <Precipitation />
            </div>
          </div>
          {/* <div className="metric-widget pressure">
            <FeelsLike />
          </div>
          <div className="metric-widget averages">
            <Averages />
          </div>
          <div className="metric-widget rainfall">
            <RainFall />
          </div>
          <div className="metric-widget wind">
            <Wind />
          </div>
          <div className="metric-widget air-quality">
            <AirQuality />
          </div>
          <div className="metric-widget humidity">
            <Humidity />
          </div>
          <div className="metric-widget pressure">
            <Pressure />
          </div>
          <div className="metric-widget precipitation">
            <Precipitation />
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Metrics;
