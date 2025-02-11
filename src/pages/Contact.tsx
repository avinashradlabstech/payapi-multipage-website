import React from "react";
import FooterMenu from "../components/Footer";
import ScheduleDemo from "../components/ScheduleDemo";

import Navbar from "../components/Navbar";
import Pageheading from "../components/Pageheading";
import contact from "../data/contact";
import ContactForm from "../components/ContactForm";
import WeWorkWith from "../components/WeWorkWith";
import home from "../data/home";

const Contact: React.FC = () => {
  return (
    <>
      <div className="flex flex-col bg-alice-blue">
        <Navbar />

        <div className="lg:mx-[165px]">
          <Pageheading
            heading={contact.heading}
            additionalCss="lg:max-w-[730px]"
          />
        </div>
        <div className="flex flex-col lg:px-[165px] lg:flex-row lg:pt-[43px] lg:gap-[125px] lg:items-center">
          <ContactForm
            buttonLabel="Submit"
            additionalDivCss="lg:flex-start lg:items-start"
          />

          <WeWorkWith
            heading={
              "Join the thousands of innovators already building with us"
            }
            weWorkClass={"lg:flex-col lg-gap-[30px]"}
            clientLogo={home.weWorkWith.clientLogo}
            description={""}
            headingTop={true}
            headingCss="text-secondary-san-juan-blue opacity-75"
            iconFill="text-secondary-san-juan-blue"
          />
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
export default Contact;
