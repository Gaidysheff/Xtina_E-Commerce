import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <Popup orderPopup={orderPopup} 
      orderPopupHandler={orderPopupHandler} /> */}
    </>
  );
};
export default SharedLayout;
