import { useContext, useEffect, useState } from "react";

import CartContext from "./../../store/cart-context.js";
import ConfirmForm from "./ConfirmForm.jsx";
import DeliveryContext from "./../../store/delivery-context.js";
import { FaArrowLeft } from "react-icons/fa";
import Modal from "./../../components/modalWindow/Modal.jsx";
import { NumericFormat } from "react-number-format";
import ProgressSteps from "./../../components/progressSteps/ProgressSteps.jsx";

const Confirm = (props) => {
  const [deliveryToPay, setDeliveryToPay] = useState(0);

  const cartContext = useContext(CartContext);

  const deliveryContext = useContext(DeliveryContext);

  const subTotal = cartContext.totalAmount;

  // ====================================================================
  const deliveryOne = props.delivery.deliveryOne;
  const deliveryTwo = props.delivery.deliveryTwo;
  const deliveryThree = props.delivery.deliveryThree;
  const deliveryFour = props.delivery.deliveryFour;
  const deliveryFive = props.delivery.deliveryFive;
  // ==================================================================

  useEffect(() => {
    if (deliveryOne != undefined) {
      setDeliveryToPay(deliveryContext[0].price);
    }
    if (deliveryTwo != undefined) {
      setDeliveryToPay(deliveryContext[1].price);
    }
    if (deliveryThree != undefined) {
      setDeliveryToPay(deliveryContext[2].price);
    }
    if (deliveryFour != undefined) {
      setDeliveryToPay(deliveryContext[3].price);
    }
    if (deliveryFive != undefined) {
      setDeliveryToPay(deliveryContext[4].price);
    }
  });

  const toBePaid = subTotal + deliveryToPay;

  const confirmHandler = () => {
    props.onConfirm(toBePaid);
    props.onOpenPayment();
  };

  return (
    <Modal onHideConfirm={props.onHideConfirm}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <ProgressSteps step1 step2 step3 />
          <button
            onClick={props.onHideConfirm}
            className="self-end w-8 h-8 text-3xl text-primaryDark rounded-md
							flex justify-center items-center border-2 cursor-pointer
							border-primaryDark 
							hover:bg-gradient-to-br hover:from-primaryLight 
							hover:to-primaryDark hover:text-white hover:ring 
							hover:border-white hover:ring-primaryDark/70"
            data-aos="zoom-in"
            data-aos-delay="2000"
            data-aos-duration="2000"
          >
            <div className="pb-1">&times;</div>
          </button>
        </div>

        <section>
          <div className="container">
            <div
              className="list-none my-3 p-0 overflow-auto max-h-[400px] 
              sm:max-h-[550px]"
            >
              <ConfirmForm />
            </div>
            <div className="text-end">
              {/* ----------------------------- */}

              <div
                className="flex justify-between items-center font-semibold my-[1rem]
                          text-sm sm:text-xl"
              >
                <p className="text-gray-400">Итого к оплате:</p>
                <NumericFormat
                  className="flex justify-start text-2xl sm:text-4xl pb-2
                            text-transparent bg-clip-text bg-gradient-to-r 
                            from-primary to-primaryDark"
                  value={toBePaid}
                  displayType={"text"}
                  decimalSeparator=","
                  thousandSeparator="."
                  suffix={" ₽"}
                  data-aos="fade-in"
                  data-aos-delay="500"
                  data-aos-duration="2000"
                />
              </div>

              {/* ----------------------------- */}
              <div className="flex justify-between text-sm sm:text-lg">
                <button
                  className="cursor-pointer bg-transparent text-primaryDark 
                  ml-2 font-semibold border-2 border-primaryDark py-2 px-4 
                  rounded-xl  hover:bg-gradient-to-br hover:from-primaryLight 
                  hover:to-primaryDark hover:text-white hover:ring 
                  hover:border-white hover:ring-primaryDark/70"
                  // data-aos="zoom-in"
                  // data-aos-delay="500"
                  // data-aos-duration="2000"
                  onClick={props.onShowSubmitForm}
                >
                  <div className="flex items-center justify-between">
                    <FaArrowLeft />
                    <p className="ml-2">Назад</p>
                  </div>
                </button>
                <button
                  className="cursor-pointer bg-transparent text-primaryDark 
                  ml-2 font-semibold border-2 border-primaryDark py-2 px-4 
                  rounded-xl  hover:bg-gradient-to-br hover:from-primaryLight 
                  hover:to-primaryDark hover:text-white hover:ring 
                  hover:border-white hover:ring-primaryDark/70"
                  // data-aos="zoom-in"
                  // data-aos-delay="500"
                  // data-aos-duration="2000"
                  onClick={confirmHandler}
                >
                  К оплате
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Confirm;
