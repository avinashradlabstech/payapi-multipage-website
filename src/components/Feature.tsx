import React from "react";
import { EasyToImplement, SimpleUi } from "../data/svg/features";

interface FeatureData {
  id: number;
  image: string;
  heading: string;
  description: string;
}

interface Feature {
  featureDetails: FeatureData[];
}

const imageMap: {
  [key: string]: React.FC<{ height?: number; width?: number }>;
} = {
  EasyToImplement,
  SimpleUi,
};

const Features: React.FC<Feature> = ({ featureDetails }) => {
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-20  lg:grid lg:justify-start  lg:pt-[150px] lg:mx-auto xl:px-0">
      {featureDetails.map((item, index) => {

        const ImageMap = imageMap[item.image];
        const isEvenIndex = index % 2 !== 0; // 2nd, 4th, 6th elements

        return (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row px-6 gap-9  justify-center items-center lg:px-0 lg:justify-start lg:gap-[125px] ${
              isEvenIndex ? "lg:flex-row-reverse " : " " // Swap order on large screens
            }`}
          >
            {/* Image */}
            <div className="flex flex-col lg:max-w-[560px]">
              {ImageMap ? <ImageMap /> : ""}
            </div>

            {/* Heading & Description */}
            <div className="flex flex-col gap-6 justify-center items-center lg:items-start flex-shrink-0 max-w-[328px] sm:max-w-[573px] lg:max-w-[445px]">
              {/* Heading */}
              <div className="flex font-serif text-36 text-secondary-san-juan-blue font-normal leading-36 sm:text-48 sm:leading-56 text-center lg:text-left -tracking-0.277">
                {item.heading}
              </div>
              {/* Description */}
              <div className="flex font-sans text-15 text-secondary-light-san-juan-blue font-normal leading-25 sm:leading-28 text-center lg:text-left">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
