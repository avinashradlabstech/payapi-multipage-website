import React from "react";

interface StatsData {
  title: string;
  count: string;
}

interface Stats {
  statData: StatsData[];
}

const Stats: React.FC<Stats> = ({ statData }) => {
  return (
    <div className="flex flex-col justifiy-center items-center px-6 py-12 w-327 gap-8 sm:gap-10 sm:flex-row lg:gap-30 sm:w-689 sm:py-64 lg:w-1110 mx-auto">
      <div className="pt-6 pb-17 w-full sm:hidden">
        <hr className="border-t border-secondary-san-juan-blue opacity-25 w-full " />
      </div>
      {statData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center max-w-327 sm:w-223 lg:w-350 sm:justify-start sm:items-start"
        >
          <div className=" pb-4 w-full hidden sm:flex ">
            <hr className="border-t border-secondary-san-juan-blue opacity-25 w-full " />
          </div>
          <div className="flex font-sans text-16 text-secondary-san-juan-blue font-normal leading-28 opacity-075 sm:leading-40 -tracking-0.185 lg:text-32 lg:text-left">
            {item.title}
          </div>

          <div className="flex flex-col font-serif  text-primary-dark-pink text-56 font-normal leading-72 -tracking-0.431">
            {item.count}
          </div>
          <div className="pt-4 w-full hidden sm:flex">
            <hr className="border-t border-secondary-san-juan-blue opacity-25 w-full " />
          </div>
        </div>
      ))}

      <div className="pt-6 w-full  sm:hidden">
        <hr className="border-t border-secondary-san-juan-blue opacity-25 w-full" />
      </div>
    </div>
  );
};

export default Stats;
