import React from "react";
import FooterMenu from "../components/Footer";
import ScheduleDemo from "../components/ScheduleDemo";

import Navbar from "../components/Navbar";
import Pageheading from "../components/Pageheading";

import pricing from "../data/pricing";
import PricingPlan from "../components/PricingPlan";
const Pricing: React.FC = () => {
  return (
    <>
       <div className="bg-alice-blue ">
        <Navbar />

        <div className="page-heading-section  mx-auto lg:max-w-1110">
          <Pageheading heading={pricing.heading} additionalCss="lg:max-w-546 " />
        </div>

        <div className="pricing-plan-section  mx-auto lg:max-w-1110">
          <PricingPlan planDetails={pricing.planDetails} />
        </div>

        <div className=" flex flex-col mx-auto pb-20 sm:flex-row justify-center items-center sm:px-100 sm:py-93  lg:max-w-1110">
          <ScheduleDemo
            additionalDivCss="py-6 gap-4 sm:gap-10 lg:flex-row lg:justify-around mx-auto lg:gap-220"
            additionalHeadingCss="flex lg:w-[445px] "
            heading="Ready to start?"
            email="demoEmail2"
            additionalEmailCss=""
            placeholder="Enter email address"
            buttonLabel="Schedule a Demo"
            additionalButtonCss="ml-0 sm:ml-[-95px]"
            autoComplete="off"
          />
        </div>
        <FooterMenu />
      </div>
    </>
  );
};
export default Pricing;
