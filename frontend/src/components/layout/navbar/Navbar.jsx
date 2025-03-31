import {
  DropdownLinks,
  DropdownLinksBurger,
  MenuLinks,
} from "../../../utils/navbarMenus.js";
import { Link, NavLink } from "react-router";

import DarkMode from "./DarkMode.jsx";
import { Element } from "react-scroll";
import { FaCaretDown } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import Logo_short_black from "../../../assets/shared/Logo_short_black.svg";
import Logo_short_primary from "../../../assets/shared/Logo_short_primary.svg";
import NavbarCartButton from "./NavbarCartButton/NavbarCartButton.jsx";
import { useState } from "react";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const humburgerHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Element name="top">
      <div
        className="bg-gray-200 dark:bg-gray-900 dark:text-white 
      duration-200 z-40 px-5 sm:px-0 sticky top-0"
      >
        <div className="py-4">
          {/* ========== FULL SCALE MENU ========== */}
          <div className="container flex lg:justify-between items-center">
            <div className="flex items-center gap-4">
              {/* --------------- Logo & Links section --------------- */}
              <div className="tooltip">
                <NavLink to="/">
                  {props.theme === "light" ? (
                    <img
                      src={Logo_short_black}
                      alt="Logo"
                      className="w-[100px] hover:scale-110"
                    />
                  ) : (
                    <img
                      src={Logo_short_primary}
                      alt="Logo"
                      className="w-[100px] hover:scale-110"
                    />
                  )}
                </NavLink>

                <span className="tooltiptext">на Главную</span>
              </div>
              {/* ---------------- Main Menu section ------------------ */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-4">
                  {/* ----- Dropdown Menu ----- */}
                  <div className="relative cursor-pointer group hover:scale-110">
                    <Link
                      to="#"
                      className="flex items-center gap-[2px] font-semibold 
                      text-brandDarkGray dark:text-brandLightGray py-2"
                    >
                      Каталог
                      <span>
                        <FaCaretDown
                          className="group-hover:rotate-180 
                                duration-300"
                        />
                      </span>
                    </Link>

                    {/* ----- Dropdown Links ----- */}
                    <div
                      className="absolute z-[999] hidden group-hover:block
                      w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900
                      dark:text-white p-2"
                    >
                      <ul className="space-y-2">
                        {DropdownLinks.map((data, index) => (
                          <li key={index}>
                            <NavLink
                              to={data.path}
                              className="inline-block w-full rounded-md f
                              ont-semibold menu-dropdown-item duration-200 p-2 
                              text-brandDarkGray dark:text-brandLightGray 
                              hover:scale-110"
                            >
                              {data.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* ----- Main Menu items ----- */}
                  {MenuLinks.map((data, index) => (
                    <div key={index}>
                      <NavLink
                        to={data.path}
                        className="inline-block px-4 font-semibold duration-200 
                        text-brandDarkGray dark:text-brandLightGray menu-item"
                      >
                        {data.label}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* -------------------Navbar Right section--------------------- */}
            <div className="mx-auto lg:m-0 flex justify-between items-center gap-4">
              {/* Search Bar section */}

              <div className="relative group hidden lg:block">
                <IoMdSearch
                  className="text-xl text-gray-600 dark:text-gray-400
                          absolute top-1/2 -translate-y-1/2 right-3 
                          group-hover:text-primary duration-200"
                  onClick={props.onShowSearch}
                />
                {/* <input
                  type="text"
                  placeholder="Найти..."
                  className="search-bar"
                />
                <IoMdSearch
                  className="text-xl text-gray-600 dark:text-gray-400
                          absolute top-1/2 -translate-y-1/2 right-3 
                          group-hover:text-primary duration-200"
                /> */}
              </div>

              {/* ------------- */}
              {/* Order-button section */}
              <NavbarCartButton
                onClick={props.onShowCart}
                cartButtonIsDisabled={props.cartButtonIsDisabled}
              />
              {/* ------------- */}
              {/* Dark Mode section */}
              <div>
                <DarkMode
                  themeHandler={props.themeHandler}
                  theme={props.theme}
                />
              </div>
            </div>
          </div>
          {/* ========== BURGER ========== */}
          <div
            className="absolute top-[1.5rem] right-[2rem] flex-col hover:scale-110 
                        justify-between w-[2.25rem] h-[2rem] flex lg:hidden"
            onClick={humburgerHandler}
          >
            <span
              className="h-[0.4rem] w-[100%] bg-gradient-to-r 
            from-primaryLight via-primary to-primaryDark rounded-md"
            ></span>
            <span
              className="h-[0.4rem] w-[100%] bg-gradient-to-r 
            from-primaryLight via-primary to-primaryDark rounded-md"
            ></span>
            <span
              className="h-[0.4rem] w-[100%] bg-gradient-to-r 
            from-primaryLight via-primary to-primaryDark rounded-md"
            ></span>
          </div>
          {/* ========== PHONE SCREEN MENU ========== */}
          <div className="container flex-col lg:hidden">
            <div className={menuOpen ? "visible" : "hidden"}>
              <div className="my-3 flex justify-center lg:hidden w-full ">
                <input
                  type="text"
                  placeholder="Найти..."
                  className="search-bar-burger dark:bg-gray-700"
                />
              </div>
              {MenuLinks.map((data, index) => (
                <div
                  key={index}
                  className="text-center rounded-2xl w-full hover:scale-110"
                >
                  <NavLink
                    to={data.path}
                    className="inline-block px-4 font-semibold text-gray-600
                            dark:text-gray-300 py-2 w-full duration-200
                            menu-item-burger"
                    onClick={() => setMenuOpen(false)}
                  >
                    {data.label}
                  </NavLink>
                </div>
              ))}
              <div className="space-y-2">
                {DropdownLinksBurger.map((data, index) => (
                  <div
                    key={index}
                    className="text-center rounded-2xl w-full hover:scale-110"
                  >
                    <NavLink
                      to={data.path}
                      className="inline-block px-4 font-semibold text-gray-600
                              dark:text-gray-300
                              duration-200 menu-item-burger py-2 w-full"
                      onClick={() => setMenuOpen(false)}
                    >
                      {data.label}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Navbar;
