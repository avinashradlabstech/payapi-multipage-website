import React from "react";
import { footerMenuItems } from "../data/menuItems";
import Logo from "./Logo";
import SocialMedia from "./SocialIcon";

const FooterMenu: React.FC = () => {
  return (
    <>
      <div className="footer-menu relative bg-secondary-mirage-blue overflow-hidden">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between  mx-auto">
          <div className="flex flex-col items-center gap-6 sm:flex-row lg:flex-row lg:items-center sm:gap-[18px]">
            <Logo
              width="135"
              height="38"
              appliedClassName="mobile-logo px-[120px] py-[41px] sm:px-[39px] sm:py-[31px] lg:pl-[164px]"
            />

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

          <SocialMedia appliedClassName="flex flex-row items-center justify-center social-icon sm:pr-[36px] lg:pr-[160px] lg:ml-auto z-[1]" />
        </div>

        <div className="absolute background-image top-[11.5625rem] h-[780px] w-[780px] sm:sm-bg-footer lg:lg-bg-footer">
          <img
            src="/img/bg-pattern/bg-pattern-circle.svg"
            alt="Background Pattern"
          />
        </div>
      </div>
    </>
  );
};

export default FooterMenu;
