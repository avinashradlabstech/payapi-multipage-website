import React from "react";
import { EasyToImplement, SimpleUi } from "../data/svg/features";

interface FeatureData {
  id: number;
  image: string;
  imageUrl: string;
  imageAlt: string;
  heading: string;
  description: string;
}

interface Feature {
  featureDetails: FeatureData[];
}

const imageMap: {
  [key: string]: React.FC<{
    height?: number;
    width?: number;
  }>;
} = {
  EasyToImplement: (props) => (
    <EasyToImplement
      height={String(props.height)}
      width={String(props.width)}
    />
  ),
  SimpleUi: (props) => (
    <SimpleUi height={String(props.height)} width={String(props.width)} />
  ),
};

const Features: React.FC<Feature> = ({ featureDetails }) => {
  return (
    <div className="flex flex-col py-20 gap-20 sm:gap-100 lg:pt-150 lg:gap-150  mx-auto max-w-1110 ">
      {featureDetails.map((item, index) => {
        const ImageMap = imageMap[item.image];
        const isEvenIndex = index % 2 !== 0;

        return (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row px-6 gap-9  justify-center items-center lg:justify-start mx-auto lg:gap-125 ${
              isEvenIndex ? "lg:flex-row-reverse " : " "
            }`}
          >
            {/* Image */}
            <div className="flex flex-col lg:min-w-[445px] ">
              {ImageMap ? <ImageMap /> : ""}
            </div>

            {/* Heading & Description */}
            <div className="flex flex-col gap-6 justify-center items-center lg:items-start flex-shrink-0">
              <div className=" flex flex-col max-w-[328px] sm:max-w-[573px] lg:max-w-[445px] gap-6 items-center lg:items-start">
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
          </div>
        );
      })}
    </div>
  );
};

export default Features;
