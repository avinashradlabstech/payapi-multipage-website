import CheckIcon from "../../data/svg/pricing/CheckIcon";
import React from "react";

interface PricingpointData {
  isChecked?: boolean;
  point?: string;
}

interface PointData {
  pointDetails: PricingpointData[];
}

const Pricingpoints: React.FC<PointData> = ({ pointDetails }) => {
  return (
    <div className="justify-center items-center mx-auto">
      {pointDetails.map((item, index) => (
        <div key={index} className="flex  pt-2 gap-6">
          <div className="w-6 pt-2 flex items-center justify-center">
            {item.isChecked && <CheckIcon />}
          </div>

          <div
            className={`flex flex-row font-sans text-secondary-san-juan-blue text-16 font-thin leading-28 -tracking-0.246 ${item.isChecked ? "" : "opacity-55"}`}
          >
            {item.point}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricingpoints;
