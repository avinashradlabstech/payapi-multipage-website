import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { headerMenuItems } from "../data/menuItems";
import CloseIcon from "../data/svg/menu/CloseIcon";
import MenuIcon from "../data/svg/menu/MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-alice-blue  top-0 z-50 px-6 py-10  sm:mx-auto lg:px-[165px] lg:py-10">
      <div className="container mx-auto flex justify-between items-center max-w-[327px] sm:max-w-[689px] lg:max-w-[1110px]">
       <a href="/"> <Logo
          width="135"
          height="38"
          type="dark"
          appliedClassName="mobile-logo sm:pr-[66px] flex"
        />
        </a>
        <div className="hidden sm:flex flex-col items-center sm:flex-row lg:flex-row lg:items-center sm:gap-[18px]">
          <div className="flex sm:gap-[86px] lg:gap-[506px]">
            <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
              {headerMenuItems.map((item) => (
                <div key={item.id}>
                  <a
                    className="font-sans text-15 font-bold text-secondary-san-juan-blue leading-normal opacity-75 cursor-pointer hover:opacity-100"
                    href={item.path}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex ml-auto">
              <Button
                additionalButtonCss="bg-blue-500 text-white px-4 py-2"
                text="Schedule a Demo"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden w-6 h-6"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 bg-black bg-opacity-50 flex items-start justify-end md:hidden w-full h-full">
          <div className="bg-secondary-mirage-blue p-6 rounded-lg shadow-lg max-w-xs w-full h-full ">
            <div className="flex flex-col absolute float-right clear-right mt-[48px] right-[27px]">
              <button onClick={() => setIsOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="flex flex-col">
              <hr className="mt-[95px] mb-[44px] bg-primary-link-water-white opacity-50"></hr>
              <nav className="flex flex-col gap-8 justify-center items-center">
                {headerMenuItems.map((item) => (
                  <div key={item.id}>
                    <a
                      className="font-sans text-20 font-bold text-primary-link-water-white leading-normal opacity-75 cursor-pointer hover:opacity-70"
                      href={item.path}
                    >
                      {item.label}
                    </a>
                  </div>
                ))}

                <Button
                  additionalButtonCss="font-bold -tracking-0.115 item-center w-[252px]"
                  onClick={() => setIsOpen(false)}
                  text="Schedule a Demo"
                />
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
