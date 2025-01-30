import React from "react";
import FooterMenu from "../components/Footer";
import ScheduleDemo from "../components/ScheduleDemo";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col  bg-alice-blue mx-auto ">
      <div className="flex flex-col items-center justify-center flex-shrink-0 sm:gap-[22px]">
        <ScheduleDemo
          additionalDivCss="gap-6 py-6"
          additionalHeadingCss="sm:max-w-[573px]"
          heading="Start building with our APIs for absolutely free."
          email="demoEmail1"
          placeholder="Enter email address"
          buttonLabel="Schedule a Demo"
          autoComplete="off"
          subHeading="Have any questions?"
          contactTxt=" Contact Us"
        />
      </div>

      <div className="flex flex-col items-center justify-center sm:flex-row mx-auto sm:justify-between sm:py-[161px] lg:pb-[96px] lg:justify-center lg:max-w-screen-lg ">
        <ScheduleDemo
          additionalDivCss="py-6 gap-4 sm:gap-10 lg:flex-row lg:gap-[220px] "
          additionalHeadingCss="lg:w-[445px]"
          heading="Ready to start?"
          email="demoEmail2"
          placeholder="Enter email address"
          buttonLabel="Schedule a Demo"
          autoComplete="off"
        />
      </div>
      <FooterMenu />
    </div>
  );
};
export default Home;
