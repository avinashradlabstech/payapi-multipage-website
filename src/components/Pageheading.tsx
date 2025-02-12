import React from "react";

interface PageheadingData {
  heading: string;
  description?: string;
  additionalCss?: string;
}

const Pageheading: React.FC<PageheadingData> = ({ heading, additionalCss }) => {
  return (
    
      <div
        className={` flex justify-center items-center mx-auto max-w-[327px] sm:pt-[80px] sm:max-w-[573px] lg:justify-start lg:items-start lg:m-0 ${additionalCss}`}
      >
        <div className="font-serif text-secondary-san-juan-blue text-32 font-thin leading-36 text-center -tracking-0.246 sm:text-48 sm:leading-56 sm:-tracking-0.369 sm:font-normal lg:text-56 lg:leading-56 lg:text-left">
          {heading}
        </div>
      </div>
    
  );
};

export default Pageheading;
