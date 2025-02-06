import React from "react";
import {
  BankingCoverageIcon,
  PersonalFinanceIcon,
  ConsumerPaymentIcon,
} from "../data/svg/featurecard";

interface FeatureCardData {
  id: string | number;
  icon: string;
  heading: string;
  description: string;
}

interface CardData {
  card: FeatureCardData[];
}

const imageMap: {
  [key: string]: React.FC<{
    height?: number;
    width?: number;
    fill?: string;
  }>;
} = {
  BankingCoverageIcon: (props) => (
    <BankingCoverageIcon
      height={Number(props.height)}
      width={Number(props.width)}
      fill={String(props.fill)}
    />
  ),
  ConsumerPaymentIcon: (props) => (
    <ConsumerPaymentIcon
      height={Number(props.height)}
      width={Number(props.width)}
      fill={String(props.fill)}
    />
  ),
  PersonalFinanceIcon: (props) => (
    <PersonalFinanceIcon
      height={Number(props.height)}
      width={Number(props.width)}
      fill={String(props.fill)}
    />
  ),
};

const FeatureCard: React.FC<CardData> = ({ card }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center px-6 gap-12 lg:gap-[30px]">
      {card.map((item) => {
        const IconComponent = imageMap[item.icon];
        return (
          <div
            key={item.id}
            className="flex flex-col gap-33 lg:gap-30 justify-center items-center"
          >
            {IconComponent ? (
              <IconComponent width={106} height={106} fill={"#36536B"} />
            ) : (
              ""
            )}
            <div className="flex flex-col gap-4 justify-center items-center flex-shrink-0 max-w-[328px] lg:max-w-[350px]">
              {/* Heading*/}
              <div className=" flex font-sans text-18 text-secondary-san-juan-blue font-extrabold leading-25 text-center -tracking-0.138">
                {item.heading}
              </div>
              {/* Description*/}
              <div className="flex font-sans text-15 text-secondary-light-san-juan-blue font-normal leading-25 text-center -tracking-0.115">
                {item.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;
