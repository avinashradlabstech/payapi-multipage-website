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
      <div className="flex flex-col bg-alice-blue">
        <Navbar />

        <div className="lg:px-[165px] mx-auto">
          <Pageheading heading={pricing.heading} />
        </div>

        <div className="lg:px-[165px] mx-auto">
          <PricingPlan planDetails={pricing.planDetails} />
        </div>

        <div className="flex flex-col mx-auto pb-20 sm:flex-row sm:justify-between  sm:py-[93px] lg:px-[165px]">
          <ScheduleDemo
            additionalDivCss="py-6 gap-4 sm:gap-10 lg:flex-row lg:gap-[220px] "
            additionalHeadingCss="flex lg:w-[445px] "
            heading="Ready to start?"
            email="demoEmail2"
            additionalEmailCss="sm:left-[33px]"
            placeholder="Enter email address"
            buttonLabel="Schedule a Demo"
            autoComplete="off"
          />
        </div>
        <FooterMenu />
      </div>
    </>
  );
};
export default Pricing;
