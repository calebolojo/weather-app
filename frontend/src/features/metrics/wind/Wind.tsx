import WindChart from "@/components/common/charts/WindChart";
import SeeMore from "@/components/common/SeeMore";
import { FaWind } from "react-icons/fa";

const Wind = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <FaWind />
        </div>
        <div>
          <p>Averages</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <WindChart />
          <div className="flex justify-between"></div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default Wind;
