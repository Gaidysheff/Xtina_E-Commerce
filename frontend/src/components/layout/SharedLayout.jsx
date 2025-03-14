import "aos/dist/aos.css";

import { useEffect, useState } from "react";

import AOS from "aos";
import Cart from "./../../pages/cart/Cart.jsx";
import CartContextProvider from "./../../store/CartContextProvider.jsx";
import Confirm from "./../../pages/cart/Confirm.jsx";
import DeliveryContextProvider from "./../../store/DeliveryContextProvider.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import OrderContextProvider from "./../../store/OrderContextProvider.jsx";
import { Outlet } from "react-router";
import Payment from "./../../pages/cart/Payment.jsx";
import SubmitOrder from "./../../pages/cart/SubmitOrder.jsx";
import { ToastContainer } from "react-toastify";

// import ConsumablesContextProvider from "./../../store/ConsumablesContextProvider.jsx";
// import FreshenerContextProvider from "./../../store/FreshenerContextProvider.jsx";
// import PerfumeContextProvider from "./../../store/PerfumeContextProvider.jsx";

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
    setSubmitFormIsVisible(false);
    setConfirmIsVisible(false);
    setPaymentIsVisible(false);
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
    setConfirmIsVisible(false);
    setPaymentIsVisible(false);
  };

  const showConfirmHandler = () => {
    setCartIsVisible(false);
    setSubmitFormIsVisible(false);
    setConfirmIsVisible(true);
    setPaymentIsVisible(false);
  };

  const showPaymentHandler = () => {
    setCartIsVisible(false);
    setSubmitFormIsVisible(false);
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
    <OrderContextProvider>
      <CartContextProvider>
        <DeliveryContextProvider>
          {props.theme === "light" ? (
            <ToastContainer
              position="top-center"
              theme="dark"
              hideProgressBar={true}
              autoClose={2000}
            />
          ) : (
            <ToastContainer
              position="top-center"
              theme="light"
              hideProgressBar={true}
              autoClose={2000}
            />
          )}
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
                onOpenConfirm={showConfirmHandler}
                onSetDeliveryOption={setDeliveryOptionHandler}
                onShowCart={showCartHandler}
              />
            )}

            {confirmIsVisible && (
              <Confirm
                onHideConfirm={hideCartHandler}
                delivery={delivery}
                onOpenPayment={showPaymentHandler}
                onConfirm={totalToBePaidHandler}
                onShowSubmitForm={showSubmitFormHandler}
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
          </main>
        </DeliveryContextProvider>
      </CartContextProvider>
    </OrderContextProvider>
  );
};
export default SharedLayout;
