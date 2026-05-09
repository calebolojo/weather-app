import SunRiseChart from "@/components/common/charts/SunRiseChart";
import SeeMore from "@/components/common/SeeMore";
import { SiSunrise } from "react-icons/si";

const Sunrise = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <SiSunrise />
        </div>
        <div>
          <p>Sunrise</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>07.17</h3>
          <SunRiseChart />
          <div className="flex justify-between">
            <p>Sunset: 16:33</p>
          </div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default Sunrise;
