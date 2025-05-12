import "aos/dist/aos.css";

import { lazy, useEffect, useState } from "react";

import AOS from "aos";
import LoaderKest from "./../sharedUI/LoaderKest.jsx";
import { Outlet } from "react-router";
import { Suspense } from "react";

const SharedLayout = (props) => {
  // ============= Dynamic Imports ====================
  const Cart = lazy(() => import("./../../pages/cart/Cart.jsx"));
  const CartContextProvider = lazy(() =>
    import("./../../store/CartContextProvider.jsx")
  );
  const Confirm = lazy(() => import("./../../pages/cart/Confirm.jsx"));
  const DeliveryContextProvider = lazy(() =>
    import("./../../store/DeliveryContextProvider.jsx")
  );

  const Footer = lazy(() => import("./Footer.jsx"));
  const Navbar = lazy(() => import("./navbar/Navbar.jsx"));
  const OrderContextProvider = lazy(() =>
    import("./../../store/OrderContextProvider.jsx")
  );
  const Payment = lazy(() => import("./../../pages/cart/Payment.jsx"));
  const PerfumeContextProvider = lazy(() =>
    import("./../../store/API/PerfumeContextProvider.jsx")
  );
  const NoteContextProvider = lazy(() =>
    import("./../../store/API/NoteContextProvider.jsx")
  );

  const AromaContextProvider = lazy(() =>
    import("./../../store/API/AromaContextProvider.jsx")
  );
  const BaseNoteContextProvider = lazy(() =>
    import("./../../store/API/BaseNoteContextProvider.jsx")
  );
  const TopNoteContextProvider = lazy(() =>
    import("./../../store/API/TopNoteContextProvider.jsx")
  );
  const MiddleNoteContextProvider = lazy(() =>
    import("./../../store/API/MiddleNoteContextProvider.jsx")
  );

  const ChordContextProvider = lazy(() =>
    import("./../../store/API/ChordContextProvider.jsx")
  );
  const CompoundContextProvider = lazy(() =>
    import("./../../store/API/CompoundContextProvider.jsx")
  );
  const FamilyContextProvider = lazy(() =>
    import("./../../store/API/FamilyContextProvider.jsx")
  );

  const Search = lazy(() => import("../search/Search"));
  const SubmitOrder = lazy(() => import("./../../pages/cart/SubmitOrder.jsx"));
  const ToastContainer = lazy(() =>
    import("react-toastify").then((module) => {
      return { default: module.ToastContainer };
    })
  );

  // ===================== SEARCH =========================
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [searchButtonIsDisabled, setSearchButtonIsDisabled] = useState(false);
  const [burgerButtonIsDisabled, setBurgerButtonIsDisabled] = useState(false);

  // ==================== CART =============================
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [submitFormIsVisible, setSubmitFormIsVisible] = useState(false);
  const [cartButtonIsDisabled, setCartButtonIsDisabled] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const [paymentIsVisible, setPaymentIsVisible] = useState(false);
  const [delivery, setDelivery] = useState([]);
  const [totalToBePaid, setTotalToBePaid] = useState(0);

  // ===================== SEARCH =========================

  const showSearchHandler = () => {
    setSearchIsVisible(true);
    setCartButtonIsDisabled(true);
    setBurgerButtonIsDisabled(true);
  };

  const hideSearchHandler = () => {
    setSearchIsVisible(false);
    setCartButtonIsDisabled(false);
    setBurgerButtonIsDisabled(false);
  };

  // const searchChangeHandler = () => {
  //   setCartButtonIsDisabled(true);
  // };

  // const searchBluringHandler = () => {
  //   setCartButtonIsDisabled(false);
  // };

  // ==================== CART =============================
  const showCartHandler = () => {
    setCartIsVisible(true);
    setCartButtonIsDisabled(true);
    setSubmitFormIsVisible(false);
    setConfirmIsVisible(false);
    setPaymentIsVisible(false);
    setSearchButtonIsDisabled(true);
    setBurgerButtonIsDisabled(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
    setSubmitFormIsVisible(false);
    setCartButtonIsDisabled(false);
    setConfirmIsVisible(false);
    setPaymentIsVisible(false);
    // ------ Additional for Search Window -------
    setSearchIsVisible(false);
    setSearchButtonIsDisabled(false);
    setBurgerButtonIsDisabled(false);
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
      offset: 50,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Suspense fallback={<LoaderKest />}>
      <OrderContextProvider>
        <CartContextProvider>
          <PerfumeContextProvider>
            <NoteContextProvider>
              <ChordContextProvider>
                <CompoundContextProvider>
                  <FamilyContextProvider>
                    <AromaContextProvider>
                      <TopNoteContextProvider>
                        <MiddleNoteContextProvider>
                          <BaseNoteContextProvider>
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
                                    onSetDeliveryOption={
                                      setDeliveryOptionHandler
                                    }
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

                                {searchIsVisible && (
                                  <Search
                                    onHideSearch={hideSearchHandler}
                                    onHideCart={hideCartHandler}
                                  />
                                )}

                                <Navbar
                                  themeHandler={props.themeHandler}
                                  theme={props.theme}
                                  onShowCart={showCartHandler}
                                  cartButtonIsDisabled={cartButtonIsDisabled}
                                  searchButtonIsDisabled={
                                    searchButtonIsDisabled
                                  }
                                  onShowSearch={showSearchHandler}
                                  burgerButtonIsDisabled={
                                    burgerButtonIsDisabled
                                  }
                                  // onSearchChange={searchChangeHandler}
                                  // onBluringSearch={searchBluringHandler}
                                />

                                <Outlet
                                  themeHandler={props.themeHandler}
                                  theme={props.theme}
                                />

                                <Footer />
                              </main>
                            </DeliveryContextProvider>
                          </BaseNoteContextProvider>
                        </MiddleNoteContextProvider>
                      </TopNoteContextProvider>
                    </AromaContextProvider>
                  </FamilyContextProvider>
                </CompoundContextProvider>
              </ChordContextProvider>
            </NoteContextProvider>
          </PerfumeContextProvider>
        </CartContextProvider>
      </OrderContextProvider>
    </Suspense>
  );
};
export default SharedLayout;
