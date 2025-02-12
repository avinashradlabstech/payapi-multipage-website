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
      <div className=" bg-alice-blue">
        <Navbar />

        <div className="page-heading-section  mx-auto lg:max-w-1110">
          <Pageheading heading={contact.heading} additionalCss="lg:max-w-730 lg:max-w-546 " />
        </div>
        <div className="contact-form-we-work-section flex flex-col lg:flex-row lg:pt-43 lg:gap-125 lg:items-center  mx-auto lg:max-w-1110">
          <ContactForm
            buttonLabel="Submit"
            additionalDivCss="lg:flex-start lg:items-start"
          />

          <WeWorkWith
            heading={
              "Join the thousands of innovators already building with us"
            }
            weWorkClass={"lg:flex-col lg-gap-30p sm:mx-auto"}
            clientLogo={home.weWorkWith.clientLogo}
            description={""}
            headingTop={true}
            headingCss="text-secondary-san-juan-blue opacity-75"
            iconFill="text-secondary-san-juan-blue"
          />
        </div>

        <div className=" flex flex-col mx-auto pb-20 sm:flex-row justify-center items-center sm:px-161 sm:py-93 lg:max-w-1110">
          <ScheduleDemo
            additionalDivCss="py-6 gap-4 sm:gap-10 lg:flex-row lg:justify-around mx-auto lg:gap-220"
            additionalHeadingCss="flex lg:w-445"
            heading="Ready to start?"
            email="demoEmail2"
            additionalEmailCss="sm:left-33"
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
