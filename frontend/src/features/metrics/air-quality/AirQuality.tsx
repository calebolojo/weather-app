import LineMeterChart from "@/components/common/charts/LineMeterChart";
import SeeMore from "@/components/common/SeeMore";
import { MdOutlineWindPower } from "react-icons/md";

const AirQuality = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <MdOutlineWindPower />
        </div>
        <div>
          <p>Air Quality</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>45</h3> <span>(Moderate)</span>
          <LineMeterChart />
          <div className="flex justify-between">
            <p>Average</p>
            <p>H: 17&deg;</p>
          </div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default AirQuality;
