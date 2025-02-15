import React, { useState, useEffect } from "react";

interface SvgData {
  width?: string;
  height?: string;
  minX?: number;
  minY?: number;
  minDW?: number;
  minDH?: number;
}

const EasyToImplement: React.FC<SvgData> = ({
  height,
  width,
  minX,
  minY,
  minDW,
  minDH,
}) => {
  const [dynamicMinX, setDynamicMinX] = useState(minX);
  const [dynamicMinY, setDynamicMinY] = useState(minY);
  const [dynamicMinWidth, setDynamicMinWidth] = useState(minDW);
  const [dynamicMinHeight, setDynamicMinHeight] = useState(minDH);
  const [dynamicWidth, setDynamicWidth] = useState(width);
  const [dynamicHeight, setDynamicHeight] = useState(height);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;

      // Adjust size based on screen width
      if (screenWidth > 0 && screenWidth < 470) {
        setDynamicWidth("320");
        setDynamicHeight("100%");

        setDynamicMinX(50);
        setDynamicMinY(0);
        setDynamicMinWidth(370);
        setDynamicMinHeight(320);
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setDynamicWidth("400");
        setDynamicHeight("100%");

        setDynamicMinX(50);
        setDynamicMinY(0);
        setDynamicMinWidth(450);
        setDynamicMinHeight(347);
      } else if (screenWidth >= 1024) {
      
        setDynamicWidth("550");
        setDynamicHeight("100%");

        setDynamicMinX(50);
        setDynamicMinY(0);
        setDynamicMinWidth(450);
        setDynamicMinHeight(340);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <svg
      viewBox={`${dynamicMinX} ${dynamicMinY} ${dynamicMinWidth} ${dynamicMinHeight}`}
      width={dynamicWidth}
      height={dynamicHeight}
      preserveAspectRatio="xMidYMid meet"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <filter
          x="-24.2%"
          y="-37.9%"
          width="159.6%"
          height="193.3%"
          filterUnits="objectBoundingBox"
          id="easyto-1"
        >
          <feOffset
            dx="25"
            dy="25"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="40"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.300726617 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <rect id="easyto-b" x="0" y="0" width="445" height="284" rx="8" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(55 55)">
          <use fill="#000" filter="url(#easyto-1)" xlinkHref="#easyto-b" />
          <use fill="#1B262F" xlinkHref="#easyto-b" />
        </g>
        <path d="M63 55h429a8 8 0 018 8v32H55V63a8 8 0 018-8z" fill="#2E3F4D" />
        <g transform="translate(71 67)">
          <circle fill="#BA4270" cx="8" cy="8" r="8" />
          <circle fill="#527695" cx="30.4" cy="8" r="8" />
          <circle fill="#36536B" cx="52.8" cy="8" r="8" />
        </g>
        <text
          font-family="RobotoMono-Regular, Roboto Mono"
          font-size="13"
          fill="#FBFCFE"
          transform="translate(55 55)"
        >
          <tspan x="32" y="86">
            &lt;form id=&quot;form-id&quot; method=&quot;GET&quot;&gt;
            &lt;/form&gt;
          </tspan>{" "}
          <tspan x="32" y="106">&lt;script</tspan>{" "}
          <tspan x="32" y="126">
            src=&quot;https://loremipsum.com/api.js&quot;
          </tspan>{" "}
          <tspan x="32" y="146">
            data-client-name=&quot;Your Company&apos;s Name&quot;
          </tspan>{" "}
          <tspan x="32" y="166">data-form-id=&quot;form-id&quot;</tspan>{" "}
          <tspan x="32" y="186">data-key=&quot;test_key&quot;</tspan>{" "}
          <tspan x="32" y="206">data-product=&quot;transactions&quot;</tspan>{" "}
          <tspan x="32" y="226">data-env=&quot;sandbox&quot;&gt;</tspan>{" "}
          <tspan x="32" y="246">&lt;/script&gt;</tspan>
        </text>
      </g>
    </svg>
  );
};

export default EasyToImplement;
