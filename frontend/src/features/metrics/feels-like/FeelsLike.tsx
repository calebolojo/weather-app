import SeeMore from "@/components/common/SeeMore";
import { LiaTemperatureHighSolid } from "react-icons/lia";

const FeelsLike = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <LiaTemperatureHighSolid />
        </div>
        <div>
          <p>Feels like</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>-5&deg;</h3>

          <p>Due to wind chill</p>
          <div className="flex justify-between">
            <p>4mm expected in next 24hrs</p>
          </div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default FeelsLike;
