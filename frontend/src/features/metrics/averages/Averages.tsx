import SeeMore from "@/components/common/SeeMore";
import { FaChartLine } from "react-icons/fa6";

const Averages = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <FaChartLine />
        </div>
        <div>
          <p>Averages</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>-2&deg;</h3>

          <p>Below daily average3</p>
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

export default Averages;
