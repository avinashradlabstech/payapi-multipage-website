import React from "react";

interface PageDetails {
  heading?: string;
  description?: string;
}

interface PageData {
  pageData: PageDetails[];
}

const Pricingpoints: React.FC<PageData> = ({ pageData }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-6 gap-4 sm:justify-start sm:items-start sm:mt-0 sm:px-10 sm:gap-16">
      {pageData.map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4 sm:max-w-[689px] lg:max-w-[920px]  sm:gap-[10px] lg:gap-[30px] sm:mx-auto">
          <div className="flex flex-col justify-center items-center mx-auto max-w-[255px] sm:w-[223px] lg:max-w-[255px] sm:justify-start sm:items-start  lg:m-0 ">
            <div className="font-serif text-secondary-san-juan-blue text-24 font-normal leading-32 text-center -tracking-0.185 sm:text-32 sm:leading-40 sm:tracking-0.246  sm:text-left" >
              {item.heading}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mx-auto max-w-[327px] sm:max-w-[456px] lg:max-w-[635px] sm:justify-start sm:items-start  lg:m-0 ">
            <div className="flex font-sans text-secondary-light-san-juan-blue text-15 font-normal leading-28 text-center  sm:text-left">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricingpoints;
