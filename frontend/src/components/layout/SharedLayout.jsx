import "aos/dist/aos.css";

import { useEffect, useState } from "react";

import AOS from "aos";
import Cart from "./../../pages/cart/Cart.jsx";
import CartContextProvider from "./../../store/CartContextProvider.jsx";
import Confirm from "./../../pages/cart/Confirm.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import OrderContextProvider from "./../../store/OrderContextProvider.jsx";
import { Outlet } from "react-router";
import Payment from "./../../pages/cart/Payment.jsx";
import PerfumeContextProvider from "./../../store/PerfumeContextProvider.jsx";
import SubmitOrder from "./../../pages/cart/SubmitOrder.jsx";

const SharedLayout = (props) => {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [submitFormIsVisible, setSubmitFormIsVisible] = useState(false);
  const [cartButtonIsDisabled, setCartButtonIsDisabled] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const [paymentIsVisible, setPaymentIsVisible] = useState(false);
  const [delivery, setDelivery] = useState([]);
  const [totalToBePaid, setTotalToBePaid] = useState(0);

  const showCartHandler = () => {
    setCartIsVisible(true);
    setCartButtonIsDisabled(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
    setSubmitFormIsVisible(false);
    setCartButtonIsDisabled(false);
    setConfirmIsVisible(false);
    setPaymentIsVisible(false);
  };

  const showSubmitFormHandler = () => {
    setCartIsVisible(false);
    setSubmitFormIsVisible(true);
  };

  const showConfirmHandler = () => {
    // setCartIsVisible(false);
    setSubmitFormIsVisible(false);
    setConfirmIsVisible(true);
  };

  const showPaymentHandler = () => {
    // setCartIsVisible(false);
    // setSubmitFormIsVisible(false);
    setConfirmIsVisible(false);
    setPaymentIsVisible(true);
  };

  const setDeliveryOptionHandler = (data) => {
    setDelivery(data);
  };

  const totalToBePaidHandler = (toBePaid) => {
    setTotalToBePaid(toBePaid);
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
      <OrderContextProvider>
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
            {submitFormIsVisible && (
              <SubmitOrder
                onHideCart={hideCartHandler}
                // onShowConfirm={showConfirmHandler}
                onOpenConfirm={showConfirmHandler}
                onSetDeliveryOption={setDeliveryOptionHandler}
              />
            )}

            {confirmIsVisible && (
              <Confirm
                onHideConfirm={hideCartHandler}
                delivery={delivery}
                // onShowPayment={showPaymentHandler}
                onOpenPayment={showPaymentHandler}
                onConfirm={totalToBePaidHandler}
              />
            )}
            {paymentIsVisible && (
              <Payment
                onHideConfirm={hideCartHandler}
                totalToBePaid={totalToBePaid}
              />
            )}

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
      </OrderContextProvider>
    </PerfumeContextProvider>
  );
};
export default SharedLayout;
