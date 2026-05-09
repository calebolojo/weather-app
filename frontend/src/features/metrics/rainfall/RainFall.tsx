import SeeMore from "@/components/common/SeeMore";
import { WiRaindrop } from "react-icons/wi";

const RainFall = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <WiRaindrop />
        </div>
        <div>
          <p>Rainfall</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>4mm</h3>

          <p>In last 24h</p>
          <div className="flex justify-between">
            <p>About 2 inches</p>
          </div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default RainFall;
