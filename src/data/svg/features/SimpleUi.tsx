import React, { useEffect, useState } from "react";

interface SvgData {
  width?: string;
  height?: string;
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

      // Adjust size based on screen width
      if (screenWidth > 0 && screenWidth < 470) {
        setDynamicWidth("300");
        setDynamicHeight("100%");

        setDynamicMinX(0);
        setDynamicMinY(0);
        setDynamicMinWidth(660);
        setDynamicMinHeight(600);
      } else if (screenWidth >= 768 && screenWidth < 1024) {
        setDynamicWidth("350");
        setDynamicHeight("100%");

        setDynamicMinX(50);
        setDynamicMinY(0);
        setDynamicMinWidth(660);
        setDynamicMinHeight(600);
      } else if (screenWidth >= 1024) {
        setDynamicWidth("550");
        setDynamicHeight("100%");

        setDynamicMinX(20);
        setDynamicMinY(0);
        setDynamicMinWidth(600);
        setDynamicMinHeight(550);
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
        <filter
          x="-41.7%"
          y="-21.5%"
          width="202.9%"
          height="153.1%"
          filterUnits="objectBoundingBox"
          id="simpleui-a"
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
        <filter
          x="-9.9%"
          y="-9.2%"
          width="131.2%"
          height="128.8%"
          filterUnits="objectBoundingBox"
          id="simpleui-g"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-41.7%"
          y="-21.5%"
          width="202.9%"
          height="153.1%"
          filterUnits="objectBoundingBox"
          id="simpleui-i"
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
        <filter
          x="-8.6%"
          y="-43.8%"
          width="127%"
          height="237.5%"
          filterUnits="objectBoundingBox"
          id="simpleui-m"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-8.6%"
          y="-43.8%"
          width="127%"
          height="237.5%"
          filterUnits="objectBoundingBox"
          id="simpleui-o"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-8.6%"
          y="-43.8%"
          width="127%"
          height="237.5%"
          filterUnits="objectBoundingBox"
          id="simpleui-q"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-8.6%"
          y="-43.8%"
          width="127%"
          height="237.5%"
          filterUnits="objectBoundingBox"
          id="simpleui-s"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-8.6%"
          y="-43.8%"
          width="127%"
          height="237.5%"
          filterUnits="objectBoundingBox"
          id="simpleui-u"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-8.6%"
          y="-43.8%"
          width="127%"
          height="237.5%"
          filterUnits="objectBoundingBox"
          id="simpleui-w"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-8.6%"
          y="-43.8%"
          width="127%"
          height="237.5%"
          filterUnits="objectBoundingBox"
          id="simpleui-y"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-8.6%"
          y="-31.2%"
          width="127%"
          height="198.2%"
          filterUnits="objectBoundingBox"
          id="simpleui-A"
        >
          <feMorphology
            radius="5"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="10"
            dy="10"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="12.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.212302148 0 0 0 0 0.325209598 0 0 0 0 0.419299139 0 0 0 0.25 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <rect id="simpleui-h" x="0" y="0" width="176" height="191" rx="5" />
        <rect id="simpleui-n" x="0" y="0" width="204" height="40" rx="5" />
        <rect id="simpleui-p" x="0" y="0" width="204" height="40" rx="5" />
        <rect id="simpleui-r" x="0" y="0" width="204" height="40" rx="5" />
        <rect id="simpleui-t" x="0" y="0" width="204" height="40" rx="5" />
        <rect id="simpleui-v" x="0" y="0" width="204" height="40" rx="5" />
        <rect id="simpleui-x" x="0" y="0" width="204" height="40" rx="5" />
        <rect id="simpleui-z" x="0" y="0" width="204" height="40" rx="5" />
        <rect id="simpleui-B" x="0" y="0" width="204" height="56" rx="5" />
        <path
          d="M35.776.57H227.01c18.34 0 33.208 14.235 33.208 31.795v435.27c0 17.56-14.867 31.796-33.208 31.796H35.776c-18.34 0-33.208-14.236-33.208-31.796V32.365C2.568 14.805 17.436.569 35.776.569z"
          id="simpleui-b"
        />
        <path
          d="M93.602 0H19.196C8.09 0 0 7.563 0 17.441v422.39c0 12.88 12.502 24.292 26.64 24.292h179.332c13.618 0 26.64-11.5 26.64-24.292V18.583c0-11.84-8.79-18.513-19.196-18.583H137.83c-.287.047-5.479 2.182-7.673 7.563-2.195 5.382-6.61 9.672-11.445 9.672h-5.615c-2.298 0-8.348-2.23-11.411-9.672C98.623.121 93.888.047 93.602 0z"
          id="simpleui-f"
        />
        <path
          d="M35.776.57H227.01c18.34 0 33.208 14.235 33.208 31.795v435.27c0 17.56-14.867 31.796-33.208 31.796H35.776c-18.34 0-33.208-14.236-33.208-31.796V32.365C2.568 14.805 17.436.569 35.776.569z"
          id="simpleui-j"
        />
        <path
          d="M93.602 0H19.196C8.09 0 0 7.563 0 17.441v422.39c0 12.88 12.502 24.292 26.64 24.292h179.332c13.618 0 26.64-11.5 26.64-24.292V18.583c0-11.84-8.79-18.513-19.196-18.583H137.83c-.287.047-5.479 2.182-7.673 7.563-2.195 5.382-6.61 9.672-11.445 9.672h-5.615c-2.298 0-8.348-2.23-11.411-9.672C98.623.121 93.888.047 93.602 0z"
          id="simpleui-k"
        />
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="simpleui-c">
          <stop stop-color="#454545" offset="0%" />
          <stop stop-color="#999" offset="22.628%" />
          <stop stop-color="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="30.702%" y2="50%" id="simpleui-d">
          <stop stop-color="#FFF" stop-opacity="0" offset="0%" />
          <stop stop-color="#BABABA" offset="22.218%" />
          <stop stop-color="#FFF" stop-opacity="0" offset="54.678%" />
          <stop stop-color="#FFF" stop-opacity="0" offset="100%" />
        </linearGradient>
        <linearGradient x1="100%" y1="50%" x2="30.591%" y2="50%" id="simpleui-e">
          <stop stop-color="#FFF" stop-opacity="0" offset="0%" />
          <stop stop-color="#BABABA" offset="22.218%" />
          <stop stop-color="#FFF" stop-opacity="0" offset="54.678%" />
          <stop stop-color="#FFF" stop-opacity="0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(356 55)">
          <use fill="#000" filter="url(#simpleui-a)" xlinkHref="#simpleui-b" />
          <use fill="#213648" xlinkHref="#simpleui-b" />
        </g>
        <path
          d="M225.18 0H32.356C23.352.549 15.05 4.657 7.447 12.324c4.89-4.268 13.61-9.98 25.14-9.98h192.362c11.53 0 20.25 5.712 25.14 9.98C242.486 4.657 234.183.549 225.18 0z"
          fill-opacity=".65"
          fill="url(#simpleui-c)"
          opacity=".596"
          transform="translate(358.568 55)"
        />
        <path
          d="M252.431 462.67V34.983c0-11.476-4.217-15.718-6.733-18.442-2.516-2.723-2.623-4.113.992-2.056 3.615 2.056 10.845 8.047 10.845 20.498V462.67c0 12.451-7.23 18.441-10.845 20.498-3.615 2.056-3.508.667-.992-2.057s6.733-6.966 6.733-18.441z"
          fill="url(#simpleui-d)"
          opacity=".75"
          transform="translate(358.568 55)"
        />
        <path
          d="M8.548 462.67V34.983c0-11.476-4.217-15.718-6.733-18.442-2.516-2.723-2.623-4.113.992-2.056 3.615 2.056 10.845 8.047 10.845 20.498V462.67c0 12.451-7.23 18.441-10.845 20.498-3.615 2.056-3.508.667-.992-2.057s6.733-6.966 6.733-18.441z"
          fill="url(#simpleui-e)"
          opacity=".75"
          transform="matrix(-1 0 0 1 372.22 55)"
        />
        <g fill="#2E423C">
          <path d="M358 156.556h.965a2 2 0 012 2v60.351a2 2 0 01-2 2H358a2 2 0 01-2-2v-60.35a2 2 0 012-2zM615.535 209.043h.965a2 2 0 012 2v42.95a2 2 0 01-2 2h-.965a2 2 0 01-2-2v-42.95a2 2 0 012-2z" />
        </g>
        <g transform="translate(371.074 67.444)">
          <use fill="#36536B" xlinkHref="#simpleui-f" />
        </g>
        <g>
          <g transform="translate(399 197)">
            <use fill="#000" filter="url(#simpleui-g)" xlinkHref="#simpleui-h" />
            <use fill="#FBFCFE" xlinkHref="#simpleui-h" />
          </g>
          <text
            font-family="PublicSans-Thin_Medium, Public Sans"
            font-size="13"
            font-style="condensed"
            font-weight="400"
            letter-spacing="-.1"
            fill="#36536B"
            transform="translate(413 233)"
          >
            <tspan x="18.222" y="80">
              Payment of{" "}
            </tspan>{" "}
            <tspan
              x="88.749"
              y="80"
              font-family="PublicSans-Bold, Public Sans"
              font-weight="bold"
            >
              $9204
            </tspan>{" "}
            <tspan x="23.736" y="98">
              is completed and{" "}
            </tspan>{" "}
            <tspan x="4.676" y="116">
              processed successfully
            </tspan>
          </text>
          <g transform="translate(458 233)">
            <circle fill="#BA4270" opacity=".25" cx="28" cy="28" r="28" />
            <path
              stroke="#BA4270"
              stroke-width="3"
              d="M19 29.696l4.577 4.577L36.85 21"
            />
          </g>
          <g transform="translate(422 373)">
            <rect fill="#BA4270" width="131" height="30" rx="15" />
            <text
              font-family="PublicSans-Bold, Public Sans"
              font-size="11"
              font-weight="bold"
              letter-spacing="-.085"
              fill="#FBFCFE"
            >
              <tspan x="45.726" y="19">
                Dismiss
              </tspan>
            </text>
          </g>
        </g>
        <g>
          <g transform="translate(53 55)">
            <use fill="#000" filter="url(#simpleui-i)" xlinkHref="#simpleui-j" />
            <use fill="#213648" xlinkHref="#simpleui-j" />
          </g>
          <path
            d="M225.18 0H32.356C23.352.549 15.05 4.657 7.447 12.324c4.89-4.268 13.61-9.98 25.14-9.98h192.362c11.53 0 20.25 5.712 25.14 9.98C242.486 4.657 234.183.549 225.18 0z"
            fill-opacity=".65"
            fill="url(#simpleui-c)"
            opacity=".596"
            transform="translate(55.568 55)"
          />
          <path
            d="M252.431 462.67V34.983c0-11.476-4.217-15.718-6.733-18.442-2.516-2.723-2.623-4.113.992-2.056 3.615 2.056 10.845 8.047 10.845 20.498V462.67c0 12.451-7.23 18.441-10.845 20.498-3.615 2.056-3.508.667-.992-2.057s6.733-6.966 6.733-18.441z"
            fill="url(#simpleui-d)"
            opacity=".75"
            transform="translate(55.568 55)"
          />
          <path
            d="M8.548 462.67V34.983c0-11.476-4.217-15.718-6.733-18.442-2.516-2.723-2.623-4.113.992-2.056 3.615 2.056 10.845 8.047 10.845 20.498V462.67c0 12.451-7.23 18.441-10.845 20.498-3.615 2.056-3.508.667-.992-2.057s6.733-6.966 6.733-18.441z"
            fill="url(#simpleui-e)"
            opacity=".75"
            transform="matrix(-1 0 0 1 69.22 55)"
          />
          <g fill="#2E423C">
            <path d="M55 156.556h.965a2 2 0 012 2v60.351a2 2 0 01-2 2H55a2 2 0 01-2-2v-60.35a2 2 0 012-2zM312.535 209.043h.965a2 2 0 012 2v42.95a2 2 0 01-2 2h-.965a2 2 0 01-2-2v-42.95a2 2 0 012-2z" />
          </g>
          <g transform="translate(68.074 67.444)">
            <mask id="simpleui-l" fill="#fff">
              <use xlinkHref="#simpleui-k" />
            </mask>
            <use fill="#EDF3F8" xlinkHref="#simpleui-k" />
            <g mask="url(#simpleui-l)">
              <g transform="translate(14.926 160.556)">
                <use fill="#000" filter="url(#simpleui-m)" xlinkHref="#simpleui-n" />
                <use fill="#FBFCFE" xlinkHref="#simpleui-n" />
              </g>
              <g fill="#36536B">
                <text
                  opacity=".7"
                  font-family="PublicSans-Thin_Medium, Public Sans"
                  font-size="10"
                  font-style="condensed"
                  font-weight="400"
                  letter-spacing="-.077"
                  transform="translate(30.926 171.556)"
                >
                  <tspan x="0" y="9">
                    Item #001
                  </tspan>
                </text>
                <text
                  font-family="PublicSans-Bold, Public Sans"
                  font-size="13"
                  font-weight="bold"
                  letter-spacing="-.1"
                  transform="translate(30.926 171.556)"
                >
                  <tspan x="146.631" y="13">
                    $29
                  </tspan>
                </text>
              </g>
              <g transform="translate(14.926 208.556)">
                <use fill="#000" filter="url(#simpleui-o)" xlinkHref="#simpleui-p" />
                <use fill="#FBFCFE" xlinkHref="#simpleui-p" />
              </g>
              <g fill="#36536B">
                <text
                  opacity=".7"
                  font-family="PublicSans-Thin_Medium, Public Sans"
                  font-size="10"
                  font-style="condensed"
                  font-weight="400"
                  letter-spacing="-.077"
                  transform="translate(30.926 219.556)"
                >
                  <tspan x="0" y="9">
                    Item #002
                  </tspan>
                </text>
                <text
                  font-family="PublicSans-Bold, Public Sans"
                  font-size="13"
                  font-weight="bold"
                  letter-spacing="-.1"
                  transform="translate(30.926 219.556)"
                >
                  <tspan x="140.836" y="13">
                    $105
                  </tspan>
                </text>
              </g>
              <g transform="translate(14.926 256.556)">
                <use fill="#000" filter="url(#simpleui-q)" xlinkHref="#simpleui-r" />
                <use fill="#FBFCFE" xlinkHref="#simpleui-r" />
              </g>
              <g fill="#36536B">
                <text
                  opacity=".7"
                  font-family="PublicSans-Thin_Medium, Public Sans"
                  font-size="10"
                  font-style="condensed"
                  font-weight="400"
                  letter-spacing="-.077"
                  transform="translate(30.926 267.556)"
                >
                  <tspan x="0" y="9">
                    Item #003
                  </tspan>
                </text>
                <text
                  font-family="PublicSans-Bold, Public Sans"
                  font-size="13"
                  font-weight="bold"
                  letter-spacing="-.1"
                  transform="translate(30.926 267.556)"
                >
                  <tspan x="140.888" y="13">
                    $810
                  </tspan>
                </text>
              </g>
              <g transform="translate(14.926 304.556)">
                <use fill="#000" filter="url(#simpleui-s)" xlinkHref="#simpleui-t" />
                <use fill="#FBFCFE" xlinkHref="#simpleui-t" />
              </g>
              <g fill="#36536B">
                <text
                  opacity=".7"
                  font-family="PublicSans-Thin_Medium, Public Sans"
                  font-size="10"
                  font-style="condensed"
                  font-weight="400"
                  letter-spacing="-.077"
                  transform="translate(30.926 315.556)"
                >
                  <tspan x="0" y="9">
                    Item #004
                  </tspan>
                </text>
                <text
                  font-family="PublicSans-Bold, Public Sans"
                  font-size="13"
                  font-weight="bold"
                  letter-spacing="-.1"
                  transform="translate(30.926 315.556)"
                >
                  <tspan x="132.701" y="13">
                    $1044
                  </tspan>
                </text>
              </g>
              <g>
                <g transform="translate(14.926 352.556)">
                  <use fill="#000" filter="url(#simpleui-u)" xlinkHref="#simpleui-v" />
                  <use fill="#FBFCFE" xlinkHref="#simpleui-v" />
                </g>
                <g fill="#36536B">
                  <text
                    opacity=".7"
                    font-family="PublicSans-Thin_Medium, Public Sans"
                    font-size="10"
                    font-style="condensed"
                    font-weight="400"
                    letter-spacing="-.077"
                    transform="translate(30.926 363.556)"
                  >
                    <tspan x="0" y="9">
                      Item #005
                    </tspan>
                  </text>
                  <text
                    font-family="PublicSans-Bold, Public Sans"
                    font-size="13"
                    font-weight="bold"
                    letter-spacing="-.1"
                    transform="translate(30.926 363.556)"
                  >
                    <tspan x="146.547" y="13">
                      $40
                    </tspan>
                  </text>
                </g>
              </g>
              <g>
                <g transform="translate(14.926 400.556)">
                  <use fill="#000" filter="url(#simpleui-w)" xlinkHref="#simpleui-x" />
                  <use fill="#FBFCFE" xlinkHref="#simpleui-x" />
                </g>
                <g fill="#36536B">
                  <text
                    opacity=".7"
                    font-family="PublicSans-Thin_Medium, Public Sans"
                    font-size="10"
                    font-style="condensed"
                    font-weight="400"
                    letter-spacing="-.077"
                    transform="translate(30.926 411.556)"
                  >
                    <tspan x="0" y="9">
                      Item #006
                    </tspan>
                  </text>
                  <text
                    font-family="PublicSans-Bold, Public Sans"
                    font-size="13"
                    font-weight="bold"
                    letter-spacing="-.1"
                    transform="translate(30.926 411.556)"
                  >
                    <tspan x="129.489" y="13">
                      $2566
                    </tspan>
                  </text>
                </g>
              </g>
              <g>
                <g transform="translate(14.926 448.556)">
                  <use fill="#000" filter="url(#simpleui-y)" xlinkHref="#simpleui-z" />
                  <use fill="#FBFCFE" xlinkHref="#simpleui-z" />
                </g>
                <g fill="#36536B">
                  <text
                    opacity=".7"
                    font-family="PublicSans-Thin_Medium, Public Sans"
                    font-size="10"
                    font-style="condensed"
                    font-weight="400"
                    letter-spacing="-.077"
                    transform="translate(30.926 459.556)"
                  >
                    <tspan x="0" y="9">
                      Item #001
                    </tspan>
                  </text>
                  <text
                    font-family="PublicSans-Bold, Public Sans"
                    font-size="13"
                    font-weight="bold"
                    letter-spacing="-.1"
                    transform="translate(30.926 459.556)"
                  >
                    <tspan x="132.466" y="13">
                      $4199
                    </tspan>
                  </text>
                </g>
              </g>
            </g>
            <path fill="#36536B" mask="url(#simpleui-l)" d="M0 0h233v114H0z" />
            <g mask="url(#simpleui-l)">
              <g transform="translate(14.926 80.556)">
                <use fill="#000" filter="url(#simpleui-A)" xlinkHref="#simpleui-B" />
                <use fill="#FBFCFE" xlinkHref="#simpleui-B" />
              </g>
              <text
                opacity=".7"
                font-family="PublicSans-Thin_Medium, Public Sans"
                font-size="10"
                font-style="condensed"
                font-weight="400"
                letter-spacing="-.077"
                transform="translate(14.926 80.556)"
              >
                <tspan x="16.231" y="28" fill="#36536B">
                  Total payment
                </tspan>
              </text>
              <text
                font-family="PublicSans-Bold, Public Sans"
                font-size="20"
                font-weight="bold"
                letter-spacing="-.154"
                transform="translate(14.926 80.556)"
              >
                <tspan x="123.339" y="35" fill="#BA4270">
                  $9204
                </tspan>
              </text>
            </g>
            <g fill="#FFF" mask="url(#simpleui-l)">
              <path
                d="M105.848 54.988v-4.952h.04c.351.512.799.9 1.345 1.162a4.069 4.069 0 001.788.394c.768 0 1.439-.148 2.011-.444a4.256 4.256 0 001.435-1.193c.384-.498.67-1.071.86-1.718.188-.646.282-1.32.282-2.02 0-.742-.094-1.453-.283-2.133a5.206 5.206 0 00-.869-1.789 4.381 4.381 0 00-1.475-1.232c-.593-.31-1.3-.465-2.122-.465-.647 0-1.24.128-1.779.384-.539.256-.983.667-1.334 1.233h-.04V40.88h-2.729v14.107h2.87zm2.405-5.538c-.458 0-.849-.094-1.172-.283a2.27 2.27 0 01-.778-.738 3.185 3.185 0 01-.424-1.06 5.805 5.805 0 01-.132-1.234c0-.43.04-.848.121-1.253.081-.404.22-.76.415-1.07a2.36 2.36 0 01.768-.759c.316-.195.71-.293 1.182-.293.458 0 .846.098 1.162.293.317.196.576.452.778.768.202.317.347.677.435 1.082.087.404.131.815.131 1.232 0 .418-.04.829-.121 1.233-.08.404-.219.758-.414 1.061a2.3 2.3 0 01-.768.738c-.317.189-.711.283-1.183.283zm10.031 2.142a6.49 6.49 0 001.9-.283 3.74 3.74 0 001.617-.99 4.312 4.312 0 00.202 1.01h2.91c-.135-.215-.229-.538-.283-.97-.054-.43-.08-.882-.08-1.354V43.57c0-.634-.142-1.142-.425-1.526a2.907 2.907 0 00-1.092-.9 4.884 4.884 0 00-1.475-.434 11.711 11.711 0 00-1.597-.111 8.79 8.79 0 00-1.728.172 4.932 4.932 0 00-1.546.576 3.44 3.44 0 00-1.131 1.07c-.297.445-.465 1.004-.506 1.678h2.87c.054-.566.243-.97.566-1.212.323-.243.768-.364 1.334-.364.256 0 .495.017.717.05.223.034.418.101.587.202.168.101.303.243.404.425.1.182.151.428.151.737.014.297-.074.523-.262.678-.189.154-.445.272-.768.353-.324.081-.694.142-1.112.182-.418.04-.842.094-1.273.162-.431.067-.86.158-1.284.273a3.622 3.622 0 00-1.131.515c-.33.229-.6.536-.809.92-.209.384-.313.872-.313 1.465 0 .539.09 1.004.273 1.394.182.391.434.714.758.97.323.256.7.445 1.131.566.432.122.896.182 1.395.182zm1.071-1.9c-.229 0-.451-.02-.667-.06a1.62 1.62 0 01-.566-.212 1.085 1.085 0 01-.384-.415 1.35 1.35 0 01-.141-.646c0-.27.047-.492.141-.667.095-.176.22-.32.374-.435.155-.114.337-.205.546-.273.209-.067.42-.121.636-.161.23-.04.459-.075.688-.101.229-.027.448-.061.656-.102.21-.04.405-.09.587-.151.181-.06.333-.145.454-.253v1.071c0 .162-.017.378-.05.647-.034.27-.125.536-.273.798a1.892 1.892 0 01-.687.678c-.31.188-.748.282-1.314.282zm8.818 5.296c.984 0 1.752-.182 2.304-.546.553-.364.984-.97 1.294-1.819l4.365-11.742h-2.97l-2.285 7.154h-.04l-2.365-7.154h-3.052l3.659 9.802c.08.202.12.417.12.647 0 .31-.09.592-.272.848-.182.256-.461.405-.839.445a5.955 5.955 0 01-.849-.02l-.828-.081v2.365c.296.027.59.05.879.07.29.02.583.03.88.03zm11.81-3.416c.498 0 .956-.06 1.374-.182.417-.121.791-.29 1.121-.505.33-.216.61-.462.839-.738.23-.276.404-.57.526-.879h.04v.546c0 .215.017.414.05.596.034.182.098.34.192.475a.971.971 0 00.415.323c.182.081.428.122.737.122.216 0 .425-.027.627-.081v-.647c-.243.04-.431.06-.566.06-.175 0-.31-.036-.404-.11a.607.607 0 01-.202-.294 1.489 1.489 0 01-.071-.404 9.79 9.79 0 01-.01-.444v-6.043c0-.795-.286-1.439-.859-1.93-.573-.492-1.485-.738-2.739-.738-1.253 0-2.22.286-2.9.859-.68.572-1.047 1.431-1.101 2.577h.768c.054-.93.367-1.624.94-2.082.572-.458 1.323-.687 2.253-.687.526 0 .97.054 1.334.161a2.5 2.5 0 01.89.445c.228.189.397.404.504.647.108.242.162.505.162.788 0 .364-.02.667-.06.91-.04.242-.142.44-.304.596-.161.155-.4.276-.717.363-.317.088-.751.152-1.304.192l-1.192.102c-.418.04-.852.107-1.304.202a3.945 3.945 0 00-1.233.475c-.37.222-.677.525-.92.909-.242.384-.363.88-.363 1.486 0 .997.303 1.734.91 2.213.606.478 1.461.717 2.566.717zm.02-.667c-.85 0-1.516-.185-2.001-.556-.485-.37-.728-.94-.728-1.707 0-.486.094-.88.283-1.183.189-.303.435-.542.738-.717.303-.175.643-.3 1.02-.374.378-.074.755-.132 1.132-.172l1.294-.121c.471-.04.899-.101 1.283-.182.384-.081.67-.236.859-.465v1.94c0 .135-.037.394-.111.778-.074.384-.246.782-.516 1.193-.27.41-.66.775-1.172 1.091-.512.317-1.206.475-2.081.475zm7.888 4.143v-5.881h.04c.31.849.802 1.462 1.476 1.84.673.376 1.441.565 2.304.565.795 0 1.485-.135 2.071-.404a3.95 3.95 0 001.455-1.122c.384-.478.67-1.047.86-1.708.188-.66.282-1.387.282-2.182 0-.728-.094-1.422-.283-2.082a5.12 5.12 0 00-.859-1.738 4.2 4.2 0 00-1.455-1.193c-.586-.296-1.276-.444-2.071-.444-.566 0-1.068.087-1.506.263a4.036 4.036 0 00-1.122.656c-.31.263-.559.55-.748.86-.188.31-.323.592-.404.848h-.04v-2.385h-.768v14.107h.768zm3.82-4.143c-.728 0-1.338-.131-1.83-.394a3.163 3.163 0 01-1.172-1.051 4.352 4.352 0 01-.616-1.516 8.613 8.613 0 01-.182-1.788c0-.62.067-1.216.202-1.789a4.517 4.517 0 01.657-1.526 3.415 3.415 0 011.182-1.071c.485-.27 1.071-.404 1.759-.404.7 0 1.296.138 1.788.414.492.276.893.64 1.203 1.091.31.452.539.964.687 1.536a6.95 6.95 0 01.222 1.749c0 .646-.077 1.256-.232 1.829a4.503 4.503 0 01-.708 1.505c-.316.432-.72.775-1.212 1.031-.492.256-1.075.384-1.748.384zm7.261-11.924v-2.082h-.768v2.082h.768zm0 12.349V40.94h-.768V51.33h.768z"
                fill-rule="nonzero"
              />
              <g transform="translate(73.926 33.556)">
                <circle
                  transform="rotate(45 12.09 3.158)"
                  cx="12.09"
                  cy="3.158"
                  r="1.895"
                />
                <circle
                  transform="rotate(45 16.556 7.624)"
                  cx="16.556"
                  cy="7.624"
                  r="1.895"
                />
                <circle
                  transform="rotate(45 21.022 12.09)"
                  cx="21.022"
                  cy="12.09"
                  r="1.895"
                />
                <circle
                  transform="rotate(45 7.624 7.624)"
                  cx="7.624"
                  cy="7.624"
                  r="1.895"
                />
                <circle
                  opacity=".5"
                  transform="rotate(45 12.09 12.09)"
                  cx="12.09"
                  cy="12.09"
                  r="1.895"
                />
                <circle
                  opacity=".5"
                  transform="rotate(45 16.556 16.556)"
                  cx="16.556"
                  cy="16.556"
                  r="1.895"
                />
                <circle
                  transform="rotate(45 3.158 12.09)"
                  cx="3.158"
                  cy="12.09"
                  r="1.895"
                />
                <circle
                  opacity=".5"
                  transform="rotate(45 7.624 16.556)"
                  cx="7.624"
                  cy="16.556"
                  r="1.895"
                />
                <circle
                  opacity=".25"
                  transform="rotate(45 12.09 21.022)"
                  cx="12.09"
                  cy="21.022"
                  r="1.895"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PhoneMockup;
