import React from "react";
import FooterMenu from "../components/Footer";
import ScheduleDemo from "../components/ScheduleDemo";
import WeWorkWith from "../components/WeWorkWith";
import home from "../data/home";
import FeatureCard from "../components/FeatureCard";
import Features from "../components/Feature";
import { PhoneMockup } from "../data/svg/features";
import Navbar from "../components/Navbar";
const Home: React.FC = () => {
  return (
    <>
      <div className="bg-alice-blue">
        <Navbar />
        <div className="flex flex-col flex-shrink-0 sm:gap-22  lg:flex-row-reverse  justify-center items-center lg:gap-208 max-w-1110 mx-auto">
          <div className="flex flex-col lg:flex-row px-6 gap-9 justify-center items-center lg:px-0 lg:justify-start h-auto">
            <PhoneMockup width="263" height="500" />
          </div>
          <ScheduleDemo
            additionalDivCss="gap-6 py-6 lg:items-start lg:gap-4"
            additionalHeadingCss="max-w-[327px] sm:max-w-[573px] lg:min-h-[243px] lg:pb-5"
            heading="Start building with our APIs for absolutely free."
            headingCss="lg:text-72 lg:leading-72 lg:-tracking-0.554 lg:text-left"
            email="demoEmail1"
            additionalEmailCss=""
            placeholder="Enter email address"
            buttonLabel="Schedule a Demo"
            additionalButtonCss="sm:right-72"
            autoComplete="off"
            subHeading="Have any questions?"
            subHeadingCss="lg:pl-27"
            errorDivCss="lg:text-left"
            contactTxt=" Contact Us"
          />
        </div>

        <WeWorkWith
          weWorkClass={
            "items-center justify-center bg-secondary-mirage-blue gap-56 lg:gap-104"
          }
          heading={home.weWorkWith.header}
          description={home.weWorkWith.description}
          buttonTxt={home.weWorkWith.buttonTxt}
          clientLogo={home.weWorkWith.clientLogo}
          headingCss="text-primary-link-water-white"
          iconFill="text-primary-link-water-white"
          headingTop={false}
        ></WeWorkWith>

        <Features featureDetails={home.features} />

        <FeatureCard card={home.cards} />

        <div className=" flex flex-col mx-auto pb-20 sm:flex-row justify-center items-center sm:px-100 sm:py-93 lg:px-96 lg:max-w-1110">
          <ScheduleDemo
            additionalDivCss="py-6 gap-4 sm:gap-10 lg:flex-row lg:justify-around mx-auto lg:gap-220"
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
export default Home;
