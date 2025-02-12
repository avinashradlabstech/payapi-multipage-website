import React from "react";
import Pricingpoints from "./pricing/Pricingpoints";
import Button from "./Button";

interface PlanPoints {
  isChecked?: boolean;
  points?: string;
}

interface PricingData {
  planName: string;
  planDescription: string;
  planCurency: string;
  planAmount: string;
  planPoints: PlanPoints[];
  buttonLabel: string;
}

interface PlanDetailsData {
  planDetails: PricingData[];
}

const Planpricing: React.FC<PlanDetailsData> = ({ planDetails }) => {
  // console.log(planDetails)
  return (
   
      <div className="flex flex-col sm:flex-row justifiy-center mx-auto items-center gap-12 sm:gap-5 lg:gap-6 pt-10 sm:pt-69 lg:pt-72">
        {planDetails.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center max-w-327 sm:max-w-223 lg:max-w-350 lg:justify-start lg:items-start"
          >
            <div className="flex font-serif text-24 text-primary-dark-pink font-normal sm:leading-10 -tracking-0.185 lg:text-32 lg:text-left">
              {item.planName}
            </div>
            <div className="flex font-sans text-15 text-secondary-light-san-juan-blue font-thin leading-28 pt-17 text-center lg:text-left">
              {item.planDescription}
            </div>
            <div className="flex font-serif text-secondary-san-juan-blue text-56 font-normal leading-72 -tracking-0.431 sm:text-48 sm:-tracking-0.369">
              {item.planCurency}
              {item.planAmount}
            </div>

            <div className="pt-6 w-full pb-6">
              <hr className="border-t border-secondary-san-juan-blue opacity-25 w-full" />
            </div>

            <div className="flex flex-col ">
              <Pricingpoints pointDetails={item.planPoints} />
            </div>

            <div className="pt-6 w-full pb-6 ">
              <hr className="border-t border-secondary-san-juan-blue opacity-25 w-full" />
            </div>

            <div className="flex justify-center items-center">
              <Button
                type="outline"
                text={item.buttonLabel}
                additionalButtonCss="leading-normal -tracking-0.115"
              />
            </div>
          </div>
        ))}
      </div>
  
  );
};

export default Planpricing;
