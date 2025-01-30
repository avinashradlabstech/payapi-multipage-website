import React from "react";
import { footerMenuItems } from "../data/menuItems";
import Logo from "./Logo";
import SocialMedia from "./SocialIcon";

const FooterMenu: React.FC = () => {
  return (
    <>
      {/* Mobile Footer */}
      <div className="xs:block sm:hidden footer-menu relative bg-secondary-mirage-blue overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <Logo
            width="135"
            height="38"
            appliedClassName="mobile-logo px-[120px] py-[41px]"
          />
          <div className="flex flex-col items-center justify-center gap-31">
            {footerMenuItems.map((item) => (
              <div key={item.id}>
                <a
                  className="font-sans text-15 font-bold text-primary-link-water-white leading-normal opacity-75 cursor-pointer"
                  href={item.path}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
          <div className="absolute background-image top-[11.5625rem] w-[780px]">
            <img className="" src="/img/bg-pattern/bg-pattern-circle.svg" />
          </div>
        </div>
        <SocialMedia appliedClassName="flex flex-row items-center justify-center gap-[1.125rem] pt-[2.5625rem] pb-[2.5rem]" />
      </div>

      {/* Tablet & Large Screen Footer */}
      <div className="hidden sm:block flex-col footer-menu relative bg-secondary-mirage-blue overflow-hidden">
        <div className="flex flex-row">
          <Logo
            width="135"
            height="38"
            appliedClassName="mobile-logo px-[39px] py-[31px]"
          />
          <div className="flex flex-row items-center justify-center gap-31">
            {footerMenuItems.map((item) => (
              <div key={item.id}>
                <a
                  className="font-sans text-15 font-bold text-primary-link-water-white leading-normal opacity-75 cursor-pointer"
                  href={item.path}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
          <div className="absolute background-image top-[11.5625rem] w-[780px] ">
            <img className="" src="/img/bg-pattern/bg-pattern-circle.svg" />
          </div>
          <SocialMedia appliedClassName="flex flex-row items-center justify-center pl-[139px] gap-[1.125rem] pt-[2.5625rem] pb-[2.5rem]" />
        </div>
      </div>
    </>
  );
};

export default FooterMenu;
