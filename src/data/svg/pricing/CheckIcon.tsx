import React from "react";

interface CheckIconData {
  width?: number;
  height?: number;
  stroke?: string;
  storkeWidth?: number;
}

const CheckIcon: React.FC<CheckIconData> = ({
  width='22',
  height='23',
  stroke ='#BA4270',
  storkeWidth='2',
}) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 5.718L4.893 9.56l8.107-8"
        stroke={stroke}
        stroke-width={storkeWidth}
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default CheckIcon;
