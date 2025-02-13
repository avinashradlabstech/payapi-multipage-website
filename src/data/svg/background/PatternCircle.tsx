import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
}

const PatternCircle: React.FC<SvgProps> = ({
  height = 780,
  width = 780,
  fill = "#36536B",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 780 780"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="390" cy="390" r="390" fill={fill} opacity="0.15" />
    </svg>
  );
};

export default PatternCircle;