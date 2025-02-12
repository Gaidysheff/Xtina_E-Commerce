import Cart from "./../../pages/cart/Cart.jsx";
import CartContextProvider from "./../../store/CartContextProvider.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import { Outlet } from "react-router";
import PerfumeContextProvider from "./../../store/PerfumeContextProvider.jsx";
import { useState } from "react";

const SharedLayout = (props) => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };
  return (
    <PerfumeContextProvider>
      <CartContextProvider>
        <main
          className="w-screen bg-white dark:bg-gray-800 dark:text-white
          duration-200 overflow-hidden"
        >
          {cartIsVisible && <Cart onHideCart={hideCartHandler} />}

          <Navbar
            themeHandler={props.themeHandler}
            theme={props.theme}
            onShowCart={showCartHandler}
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
