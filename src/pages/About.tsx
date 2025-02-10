import React from "react";
import FooterMenu from "../components/Footer";
import ScheduleDemo from "../components/ScheduleDemo";

import Navbar from "../components/Navbar";
import Pageheading from "../components/Pageheading";
import about from "../data/about";
import PageDescription from "../components/about/PageDescription";
import Stats from "../components/Stats";
import AboutImage from "../components/about/aboutImage";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col bg-alice-blue">
        <Navbar />

        <div className="lg:mx-[260px]">
          <Pageheading
            heading={about.heading}
            additionalCss="lg:max-w-[730px]"
          />
        </div>

        <div className="lg:px-[260px] pt-[40px] sm:pt-[54px]">
          <PageDescription pageData={about.keypoints1} />
        </div>

        <AboutImage
          imageName={about.image.imageName}
          imageAlt={about.image.imageAlt}
          imageUrl={about.image.imageUrl}
        />

        <div className="mx-auto">
          <Stats statData={about.stats} />
        </div>

        <div className="lg:px-[165px] pt-[40px] sm:pt-0">
          <PageDescription pageData={about.keypoints2} />
        </div>

        <div className="flex flex-col mx-auto pb-20 sm:flex-row sm:justify-between sm:px-[161px] sm:py-[93px] lg:px-[165px]">
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
export default About;
