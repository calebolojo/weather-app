import SeeMore from "@/components/common/SeeMore";
import { FaEye } from "react-icons/fa";

const Visibility = () => {
  return (
    <div id="sunrise" className="metric-widget-wrap">
      <div className="metric-widget__head flex items-center">
        <div>
          <FaEye />
        </div>
        <div>
          <p>Visibility</p>
        </div>
      </div>
      <div className="metric-widget__body">
        <div className="figure">
          <h3>5km</h3>

          <div className="flex justify-between">
            <p>Limited due to snowfall</p>
          </div>
        </div>
      </div>
      <div className="metric-widget__foot">
        <SeeMore />
      </div>
    </div>
  );
};

export default Visibility;
