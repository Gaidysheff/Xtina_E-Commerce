import { useContext, useEffect, useState } from "react";

import CartContext from "./../../store/cart-context.js";
import ConfirmForm from "./ConfirmForm.jsx";
import { DELIVERY } from "../../utils/delivery.js";
import Modal from "./../../components/modalWindow/Modal.jsx";
import { NumericFormat } from "react-number-format";

// import OrderContext from "./../../store/order-context.js";

const Confirm = (props) => {
  // const [deliveryCharge, setDeliveryCharge] = useState("Самовывоз");
  const [deliveryToPay, setDeliveryToPay] = useState(0);

  // const orderContext = useContext(OrderContext);
  const cartContext = useContext(CartContext);

  const subTotal = cartContext.totalAmount;
  // console.log("subTotal=", subTotal);

  // const [toBePaid, setToBePaid] = useState(0);

  // ====================================================================
  const deliveryOne = props.delivery.deliveryOne;
  const deliveryTwo = props.delivery.deliveryTwo;
  const deliveryThree = props.delivery.deliveryThree;
  const deliveryFour = props.delivery.deliveryFour;
  const deliveryFive = props.delivery.deliveryFive;

  useEffect(() => {
    if (deliveryOne != undefined) {
      // setDeliveryCharge("deliveryOne");
      setDeliveryToPay(DELIVERY[0].price);
    }
    if (deliveryTwo != undefined) {
      // setDeliveryCharge("deliveryTwo");
      setDeliveryToPay(DELIVERY[1].price);
    }
    if (deliveryThree != undefined) {
      // setDeliveryCharge("deliveryThree");
      setDeliveryToPay(DELIVERY[2].price);
    }
    if (deliveryFour != undefined) {
      // setDeliveryCharge("deliveryFour");
      setDeliveryToPay(DELIVERY[3].price);
    }
    if (deliveryFive != undefined) {
      // setDeliveryCharge("deliveryFive");
      setDeliveryToPay(DELIVERY[4].price);
    }
    // const sum = subTotal + deliveryToPay;
    // setToBePaid(sum);
  });

  // console.log("DELIVERY=", deliveryToPay);

  // if (
  //   deliveryOne == undefined &&
  //   deliveryTwo == undefined &&
  //   deliveryThree == undefined &&
  //   deliveryFour == undefined &&
  //   deliveryFive == undefined
  // ) {
  //   console.log("Самовывоз");
  // }

  // ====================================================================
  // console.log("deliveryCharge-2", deliveryCharge);

  // console.log("TELEPHONE=", props.delivery.telephone);
  // console.log("CONNECTION=", props.delivery.connection);
  // console.log("deliveryOne=", props.delivery.deliveryOne);
  // console.log("deliveryTwo=", props.delivery.deliveryTwo);

  // ---------------------------------
  // const [objArr, setObjArr] = useState(orderContext.shipping);

  // const result = objArr.map((obj) => {
  //   return obj.name;
  // });

  // --------------------------------------------------
  // console.log("result=", result);

  // if (orderContext.shipping != []) {
  //   console.log("ORDER=", orderContext.shipping);
  // } else {
  //   console.log("I am EMPTY");
  // }

  // const shipping = orderContext.shipping.map((item) => {
  //   return item;
  // });
  // console.log(shipping[0]);

  // const name = orderContext.shipping.get("name");
  // console.log("name=", name);
  // const telephone = shipping[0].telephone;
  // const connection = shipping[0].connection;

  // console.log("name=", shipping[0].name);
  // console.log("telephone=", shipping[0].telephone);
  // console.log("connection=", shipping[0].connection);

  // console.log("connection=", shipping[0].deliveryOne);
  // console.log("connection=", shipping[0].deliveryTwo);
  // console.log("connection=", shipping[0].deliveryThree);
  // console.log("connection=", shipping[0].deliveryFour);
  // console.log("connection=", shipping[0].deliveryFive);

  const toBePaid = subTotal + deliveryToPay;

  const confirmHandler = () => {
    // const totalData = {
    //   toBePaid1: toBePaid1,
    //   toBePaid2: toBePaid2,
    //   toBePaid3: toBePaid3,
    // };
    // props.onConfirm(totalData);
    props.onConfirm(toBePaid);
    props.onOpenPayment();
  };

  return (
    <Modal onHideConfirm={props.onHideConfirm}>
      <div className="flex flex-col">
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
                          text-xl"
              >
                <p className="text-gray-400">Итого к оплате:</p>
                <NumericFormat
                  className="flex justify-start text-3xl sm:text-5xl pb-2
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
              <button
                className="cursor-pointer bg-transparent text-primaryDark ml-2
											font-semibold border-2 border-primaryDark py-2 px-4 rounded-xl 
											hover:bg-gradient-to-br hover:from-primaryLight 
											hover:to-primaryDark hover:text-white hover:ring 
											hover:border-white hover:ring-primaryDark/70"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="2000"
                onClick={confirmHandler}
              >
                Перейти к оплате
              </button>
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Confirm;
