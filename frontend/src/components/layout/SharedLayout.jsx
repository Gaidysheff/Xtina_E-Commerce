import "aos/dist/aos.css";

import { useEffect, useState } from "react";

import AOS from "aos";
import Cart from "./../../pages/cart/Cart.jsx";
import CartContextProvider from "./../../store/CartContextProvider.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import { Outlet } from "react-router";
import PerfumeContextProvider from "./../../store/PerfumeContextProvider.jsx";
import SubmitOrder from "./../../pages/cart/SubmitOrder.jsx";

const SharedLayout = (props) => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [submitFormIsVisible, setSubmitFormIsVisible] = useState(false);
  const [cartButtonIsDisabled, setCartButtonIsDisabled] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
    setCartButtonIsDisabled(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
    setSubmitFormIsVisible(false);
    setCartButtonIsDisabled(false);
  };

  const showSubmitFormHandler = () => {
    setCartIsVisible(false);
    setSubmitFormIsVisible(true);
  };

  // ==================== Animation =======================

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <PerfumeContextProvider>
      <CartContextProvider>
        <main
          className="w-screen bg-white dark:bg-gray-800 dark:text-white
            duration-200 overflow-hidden"
        >
          {cartIsVisible && (
            <Cart
              onHideCart={hideCartHandler}
              onShowSubmitForm={showSubmitFormHandler}
            />
          )}
          {submitFormIsVisible && <SubmitOrder onHideCart={hideCartHandler} />}

          <Navbar
            themeHandler={props.themeHandler}
            theme={props.theme}
            onShowCart={showCartHandler}
            cartButtonIsDisabled={cartButtonIsDisabled}
          />
          <Outlet themeHandler={props.themeHandler} theme={props.theme} />
          <Footer />
          {/* <Popup orderPopup={orderPopup} 
            orderPopupHandler={orderPopupHandler} /> */}
        </main>
      </CartContextProvider>
    </PerfumeContextProvider>
  );
};
export default SharedLayout;
