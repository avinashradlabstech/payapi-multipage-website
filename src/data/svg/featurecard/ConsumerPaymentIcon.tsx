import React from "react";

interface SvgData {
  width?: number;
  height?: number;
  fill: string;
}

const ConsumerPaymentIcon: React.FC<SvgData> = ({
  height = "106",
  width = "106",
  fill = "#36536B",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 106 106"
      fill="none"
    >
      <circle cx="53" cy="53" r="53" fill={fill} />
      <mask
        id="mask0_0_1772"        
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="106"
        height="106"
      >
        <circle cx="53" cy="53" r="53" fill="white" />
      </mask>
      <g mask="url(#mask0_0_1772)"></g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M72.948 45.3906V45.7291C72.948 46.2469 72.5282 46.6666 72.0105 46.6666H33.9375C33.4198 46.6666 33 46.2469 33 45.7291V45.3906C33 42.4134 35.4134 40 38.3906 40H67.5573C70.5345 40 72.948 42.4134 72.948 45.3906ZM33 50.8854V61.2239C33 64.2011 35.4134 66.6145 38.3906 66.6145H67.5573C70.5345 66.6145 72.948 64.2011 72.948 61.2239V50.8854C72.948 50.3677 72.5282 49.9479 72.0105 49.9479H33.9375C33.4198 49.9479 33 50.3677 33 50.8854ZM42.974 57.4479H40.474C39.5679 57.4479 38.8334 56.7134 38.8334 55.8073C38.8334 54.9012 39.5679 54.1666 40.474 54.1666H42.974C43.8801 54.1666 44.6146 54.9012 44.6146 55.8073C44.6146 56.7134 43.8801 57.4479 42.974 57.4479Z"
        fill="white"
      />
    </svg>
  );
};

export default ConsumerPaymentIcon;
