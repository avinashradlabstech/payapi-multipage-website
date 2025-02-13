import React from "react";
import { footerMenuItems } from "../data/menuItems";
import Logo from "./Logo";
import SocialMedia from "./SocialIcon";
//import PatternCircle from "../data/svg/background/PatternCircle";

const FooterMenu: React.FC = () => {
  return (
    <>
      <div className="footer-menu flex relative bg-secondary-mirage-blue overflow-hidden  lg:px-165 ">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between  mx-auto sm:gap-150 lg:gap-663">
          <div className="flex flex-col items-center gap-6 sm:flex-row lg:flex-row lg:items-center sm:gap-18">
            <a href="/">
              {" "}
              <Logo
                width="135"
                height="38"
                type="light"
                appliedClassName="mobile-logo px-120 py-41 sm:px-39 sm:py-31 "
              />
            </a>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              {footerMenuItems.map((item) => (
                <div key={item.id}>
                  <a
                    className="font-sans text-15 font-bold text-primary-link-water-white leading-normal opacity-75 cursor-pointer hover:opacity-100"
                    href={item.path}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <SocialMedia appliedClassName="flex flex-row items-center justify-center social-icon  z-[1]" />
          </div>
        </div>
        {/* <div className="absolute top-[185px] w-[90vw] h-[90vw] max-w-[780px] max-h-[780px] lg:top-[-8.5rem] lg:left-[65.625rem]">
          <PatternCircle className="absolute" />
        </div> */}
      </div>
    </>
  );
};

export default FooterMenu;
