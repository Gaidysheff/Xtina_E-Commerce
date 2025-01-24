import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import { Outlet } from "react-router";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <Popup orderPopup={orderPopup} 
      orderPopupHandler={orderPopupHandler} /> */}
    </>
  );
};
export default SharedLayout;
