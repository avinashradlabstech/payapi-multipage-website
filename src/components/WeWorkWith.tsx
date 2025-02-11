import React from "react";
import Button from "./Button";
import {
  GoogleIcon,
  HpIcon,
  MicrosoftIcon,
  NvidiaIcon,
  OracleIcon,
  TeslaIcon,
} from "../data/svg/weworkwith";

interface ClientLogo {
  id: string | number;
  name: string;
}

interface WeWorkWithData {
  heading: string;
  weWorkClass?: string;
  description: string;
  buttonTxt?: string;
  clientLogo: ClientLogo[];
  headingTop?: boolean;
  headingCss?: string;
  iconFill?: string;
}

const iconComponents: {
  [key: string]: React.FC<{ className?: string; fill?: string }>;
} = {
  Google: GoogleIcon,
  Hp: HpIcon,
  Microsoft: MicrosoftIcon,
  Nvidia: NvidiaIcon,
  Oracle: OracleIcon,
  Tesla: TeslaIcon,
};

const WeWorkWith: React.FC<WeWorkWithData> = ({
  weWorkClass,
  heading,
  description,
  buttonTxt,
  clientLogo,
  headingTop,
  headingCss,
  iconFill,
}) => {
  return (
    <>
      <div
        className={`we-work-with-section flex flex-col lg:flex-row-reverse py-20  ${weWorkClass}`}
      >
        {headingTop === true && (
          <div className="flex flex-col px-6 py-10 gap-4 sm:gap-8 lg:px-0">
            <div className="flex flex-col gap-6 justify-center items-center lg:justify-start lg:items-start sm:max-w-[456px] lg:max-w-[445px]">
              {/* Heading */}
              <div
                className={`text-center lg:text-left  font-serif text-32 font-normal leading-9 tracking-tightest lg:text-24 lg:leading-32 -leading-0.185 ${headingCss}`}
              >
                {heading}
              </div>
            </div>
          </div>
        )}
        {/* Client Logos */}
        <div className="flex">
          <div className="lg:flex-row grid grid-cols-2 grid-flow-row sm:grid-cols-3 justify-center  mx-auto  items-center gap-[37px] justify-items-center">
            {clientLogo.map((item) => {
              const IconComponent = iconComponents[item.name];
              return (
                <div key={item.id} className={iconFill ? iconFill : ''}>
                  {IconComponent ? (
                    <IconComponent className="flex flex-col" fill={iconFill ? iconFill : ''} />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {headingTop === false && (
          <div className="flex flex-col px-6 py-10 gap-4 sm:gap-8 lg:px-0">
            <div className="flex flex-col gap-6 justify-center items-center lg:justify-start lg:items-start sm:max-w-[456px] lg:max-w-[445px]">
              {/* Heading */}
              <div className="text-center lg:text-left text-primary-link-water-white font-serif text-32 font-normal leading-9 tracking-tightest lg:text-48 lg:leading-56">
                {heading}
              </div>

              {/* Description */}
              <div className="text-center lg:text-left text-primary-link-water-white font-sans text-15 font-normal leading-7 opacity-75 ">
                {description}
              </div>
            </div>
            {/* Button */}
            <div className="flex flex-col mx-auto lg:mx-0 lg:items-start">
              <Button type="secondary" text={buttonTxt} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default WeWorkWith;
