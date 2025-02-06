import React, { useEffect, useState } from "react";

interface SvgData {
  width: string;
  height: string;
  minX?: number;
  minY?: number;
  minDW?: number;
  minDH?: number;
}

const PhoneMockup: React.FC<SvgData> = ({
  height = "",
  width = "",
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
      console.log(screenWidth);
      // Adjust size based on screen width
      if (screenWidth > 0 && screenWidth < 470) {
        setDynamicWidth("200");
        setDynamicHeight("100%");

        setDynamicMinX(0);
        setDynamicMinY(0);
        setDynamicMinWidth(350);
        setDynamicMinHeight(600);
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setDynamicWidth("350");
        setDynamicHeight("100%");

        setDynamicMinX(0);
        setDynamicMinY(0);
        setDynamicMinWidth(350);
        setDynamicMinHeight(600);
      } else if (screenWidth >= 1024 && screenWidth < 1440) {
        setDynamicWidth("350");
        setDynamicHeight("100%");

        setDynamicMinX(0);
        setDynamicMinY(0);
        setDynamicMinWidth(350);
        setDynamicMinHeight(600);
      }
      else if (screenWidth >= 1440) {
        setDynamicWidth("500");
        setDynamicHeight("100%");

        setDynamicMinX(20);
        setDynamicMinY(0);
        setDynamicMinWidth(500);
        setDynamicMinHeight(600);
      }
    };

    // Call updateSize when component mounts and whenever window is resized
    updateSize(); // Initial size update
    window.addEventListener("resize", updateSize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <svg
      viewBox={`${dynamicMinX} ${dynamicMinY} ${dynamicMinWidth} ${dynamicMinHeight}`}
      width={dynamicWidth}
      height={dynamicHeight}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#454545" />
          <stop offset="22.628%" stop-color="#999" />
          <stop offset="100%" stop-color="#FFF" />
        </linearGradient>
        <linearGradient id="d" x1="100%" x2="30.702%" y1="50%" y2="50%">
          <stop offset="0%" stop-color="#FFF" stop-opacity="0" />
          <stop offset="22.218%" stop-color="#BABABA" />
          <stop offset="54.678%" stop-color="#FFF" stop-opacity="0" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="e" x1="100%" x2="30.591%" y1="50%" y2="50%">
          <stop offset="0%" stop-color="#FFF" stop-opacity="0" />
          <stop offset="22.218%" stop-color="#BABABA" />
          <stop offset="54.678%" stop-color="#FFF" stop-opacity="0" />
          <stop offset="100%" stop-color="#FFF" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="g" x1="50%" x2="50%" y1="0%" y2="99.221%">
          <stop offset="0%" stop-color="#9CB6CD" />
          <stop offset="42.056%" stop-color="#9AB3CA" />
          <stop offset="71.659%" stop-color="#557496" />
          <stop offset="100%" stop-color="#475178" />
        </linearGradient>
        <filter
          id="a"
          width="202.9%"
          height="153.1%"
          x="-41.7%"
          y="-21.5%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dx="25"
            dy="25"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="40"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.300726617 0"
          />
        </filter>
        <filter
          id="i"
          width="125.2%"
          height="163.2%"
          x="-8%"
          y="-20.1%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            radius="5"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="12.5"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
          />
        </filter>
        <path
          id="b"
          d="M35.776.57H227.01c18.34 0 33.208 14.235 33.208 31.795v435.27c0 17.56-14.867 31.796-33.208 31.796H35.776c-18.34 0-33.208-14.236-33.208-31.796V32.365C2.568 14.805 17.436.569 35.776.569z"
        />
        <path
          id="f"
          d="M93.602 0H19.196C8.09 0 0 7.563 0 17.441v422.39c0 12.88 12.502 24.292 26.64 24.292h179.332c13.618 0 26.64-11.5 26.64-24.292V18.583c0-11.84-8.79-18.513-19.196-18.583H137.83c-.287.047-5.479 2.182-7.673 7.563-2.195 5.382-6.61 9.672-11.445 9.672h-5.615c-2.298 0-8.348-2.23-11.411-9.672C98.623.121 93.888.047 93.602 0z"
        />
        <rect id="j" width="218" height="87" x="0" y="0" rx="5" />
      </defs>
      <g fill="none" fill-rule="evenodd" transform="translate(53 55)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <use fill="#213648" xlinkHref="#b" />
        <path
          fill="url(#c)"
          fill-opacity=".65"
          d="M225.18 0H32.356C23.352.549 15.05 4.657 7.447 12.324c4.89-4.268 13.61-9.98 25.14-9.98h192.362c11.53 0 20.25 5.712 25.14 9.98C242.486 4.657 234.183.549 225.18 0z"
          opacity=".596"
          transform="translate(2.568)"
        />
        <path
          fill="url(#d)"
          d="M252.431 462.67V34.983c0-11.476-4.217-15.718-6.733-18.442-2.516-2.723-2.623-4.113.992-2.056 3.615 2.056 10.845 8.047 10.845 20.498V462.67c0 12.451-7.23 18.441-10.845 20.498-3.615 2.056-3.508.667-.992-2.057s6.733-6.966 6.733-18.441z"
          opacity=".75"
          transform="translate(2.568)"
        />
        <path
          fill="url(#e)"
          d="M8.548 462.67V34.983c0-11.476-4.217-15.718-6.733-18.442-2.516-2.723-2.623-4.113.992-2.056 3.615 2.056 10.845 8.047 10.845 20.498V462.67c0 12.451-7.23 18.441-10.845 20.498-3.615 2.056-3.508.667-.992-2.057s6.733-6.966 6.733-18.441z"
          opacity=".75"
          transform="matrix(-1 0 0 1 16.22 0)"
        />
        <path
          fill="#2E423C"
          d="M2 101.557h.965a2 2 0 012 2v60.35a2 2 0 01-2 2H2a2 2 0 01-2-2v-60.35a2 2 0 012-2zm257.535 52.487h.965a2 2 0 012 2v42.95a2 2 0 01-2 2h-.965a2 2 0 01-2-2v-42.95a2 2 0 012-2z"
        />
        <g transform="translate(15.074 12.444)">
          <mask id="h" fill="#fff">
            <use xlinkHref="#f" />
          </mask>
          <use fill="#FFF" xlinkHref="#f" />
          <path fill="url(#g)" mask="url(#h)" d="M-.074 0h233v465h-233z" />
          <text
            fill="#FFF"
            font-family="PublicSans-Bold, Public Sans"
            font-size="32"
            font-weight="bold"
            mask="url(#h)"
          >
            <tspan x="73.926" y="127.556">
              12:49
            </tspan>
          </text>
        </g>
        <g transform="translate(22 167)">
          <use fill="#000" filter="url(#i)" xlinkHref="#j" />
          <use fill="#FBFCFE" xlinkHref="#j" />
          <g font-size="10">
            <text
              fill="#BA4270"
              font-family="PublicSans-Bold, Public Sans"
              font-weight="bold"
              transform="translate(16 16)"
            >
              <tspan x="0" y="9">
                PayAPI
              </tspan>
            </text>
            <text
              fill="#36536B"
              font-family="PublicSans-Regular, Public Sans"
              opacity=".5"
              transform="translate(16 16)"
            >
              <tspan x="144.05" y="9">
                Just Now
              </tspan>
            </text>
          </g>
          <text
            fill="#36536B"
            font-family="PublicSans-Regular, Public Sans"
            font-size="10"
          >
            <tspan x="16" y="40">
              The payment has been processed. The{" "}
            </tspan>
            <tspan x="16" y="54">
              total amount deducted from your{" "}
            </tspan>
            <tspan x="16" y="68">
              account is
            </tspan>
            <tspan
              x="63.62"
              y="68"
              font-family="PublicSans-Bold, Public Sans"
              font-weight="bold"
            >
              {" "}
              US $104.90
            </tspan>
            <tspan x="121.855" y="68">
              .
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
};

export default PhoneMockup;
