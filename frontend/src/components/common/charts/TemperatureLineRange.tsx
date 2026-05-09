import React from "react";

export interface LineRangeProps {
  low: number;
  high: number;
  showRangeChart?: boolean;
}

const TemperatureLineRange = ({
  low,
  high,
  showRangeChart,
}: LineRangeProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{low}&deg;</span>
      {showRangeChart && <div></div>}
      {showRangeChart && <span>{high}&deg;</span>}
    </div>
  );
};

export default TemperatureLineRange;
