import React, { useState } from "react";

interface MenuData {
  label: string;
  href?: string;
}

const menuItems: MenuData[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const Menu: React.FC= () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>setIsOpen(!isOpen)
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold">My App</div>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="px-3 py-2 rounded-md hover:bg-gray-700"
                  >
                    {item.label}
                  </a>                  
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <ul className="space-y-1 px-2 pt-2 pb-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <div className="relative">
                    <a
                      href={item.href}
                      className="block px-3 py-2 rounded-md hover:bg-gray-700"
                      
                    >
                      {item.label}
                    </a>
                   
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Menu;
