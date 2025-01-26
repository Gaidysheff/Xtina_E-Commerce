import { useEffect, useState } from "react";

import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import { Outlet } from "react-router";

const SharedLayout = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // props.onChangeTheme(theme);
  };

  // Access to html element
  const element = document.documentElement;
  // console.log(element);

  // set theme to localStorage and html-element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <main
      className="bg-white dark:bg-gray-900 dark:text-white
      duration-200 overflow-hidden"
    >
      <Navbar themeHandler={themeHandler} theme={theme} />
      <Outlet />
      <Footer />
      {/* <Popup orderPopup={orderPopup} 
      orderPopupHandler={orderPopupHandler} /> */}
    </main>
  );
};
export default SharedLayout;
