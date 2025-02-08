import React from "react";

interface PageheadingData {
  heading: string;
  description?: string;
}

const Pageheading: React.FC<PageheadingData> = ({ heading }) => {
  return (
    <div className="flex flex-col  lg:mx-auto">
      <div className="flex justify-center items-center mx-auto max-w-[327px] sm:pt-[80px]  lg:max-w-[546px] lg:justify-start lg:items-start  lg:m-0 ">
        <div className="font-serif text-secondary-san-juan-blue text-32 font-thin leading-36 -tracking-0.246 sm:text-48 sm:leading-56 sm:-tracking-0.369 sm:font-normal">
          {heading}
        </div>
      </div>
    </div>
    // <div className="flex flex-col lg:px-[165px] lg:mx-auto">
    //   <div className="flex sm:pt-[80px] lg:max-w-[546px] lg:m-0">
    //     <div
    //       className="font-serif text-secondary-san-juan-blue text-32 font-thin leading-36   -tracking-0.246 sm:text-48 sm:leading-56 sm:-tracking-0.369 sm:font-normal"
    //     >
    //         {heading}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Pageheading;
