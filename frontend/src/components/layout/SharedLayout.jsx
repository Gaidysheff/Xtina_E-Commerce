import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import { Outlet } from "react-router";

const SharedLayout = (props) => {
  return (
    <main
      className="w-screen bg-white dark:bg-gray-800 dark:text-white
      duration-200 overflow-hidden"
    >
      <Navbar themeHandler={props.themeHandler} theme={props.theme} />
      <Outlet themeHandler={props.themeHandler} theme={props.theme} />
      <Footer />
      {/* <Popup orderPopup={orderPopup} 
      orderPopupHandler={orderPopupHandler} /> */}
    </main>
  );
};
export default SharedLayout;
