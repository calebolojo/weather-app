import UVIndexRangeChart from "@/components/common/charts/LineMeterChart";
import SeeMore from "@/components/common/SeeMore";
import { IoSunny } from "react-icons/io5";

const UvIndex = () => {
  return (
    <div id="uv-index" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <IoSunny />
        </div>
        <div>
          <p>UV INDEX</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>0</h3>
          <p>Low</p>
          <UVIndexRangeChart />
          <div className="flex justify-between">
            <p>Low for the rest of the day</p>
          </div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default UvIndex;
