import SeeMore from "@/components/common/SeeMore";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const Pressure = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <TiWeatherWindyCloudy />
        </div>
        <div>
          <p>Pressure</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>1016</h3>
          <div className="flex justify-between">
            <p></p>
          </div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default Pressure;
