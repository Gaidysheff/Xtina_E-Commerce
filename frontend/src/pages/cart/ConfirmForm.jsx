import CartContext from "./../../store/cart-context.js";
import ConfirmFormDelivery from "./ConfirmFormDelivery.jsx";
import ConfirmFormItem from "./ConfirmFormItem.jsx";
import OrderContext from "./../../store/order-context.js";
import { useContext } from "react";

const ConfirmForm = () => {
  const orderContext = useContext(OrderContext);
  const cartContext = useContext(CartContext);

  const cartPerfumes = (
    <ul className="list-none mt-3 p-0">
      {cartContext.items.map((item, index) => (
        <ConfirmFormItem
          key={index}
          id={item.id}
          name={item.name}
          image={item.image}
          amount={item.amount}
          price={item.price}
          volume={item.volume}
        />
      ))}
    </ul>
  );

  const delivery = (
    <ul className="list-none mt-3 p-0">
      {orderContext.shipping.map((ship, index) => (
        <ConfirmFormDelivery
          key={index}
          name={ship.name}
          telephone={ship.telephone}
          connection={ship.connection}
          deliveryOne={ship.deliveryOne}
          deliveryTwo={ship.deliveryTwo}
          deliveryThree={ship.deliveryThree}
          deliveryFour={ship.deliveryFour}
          deliveryFive={ship.deliveryFive}
        />
      ))}
    </ul>
  );

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[550px]">
      <div
        className="italic text-center mx-5 h-full font-['Pacifico'] 
        drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]
        text-transparent bg-clip-text bg-gradient-to-r from-primary 
        to-primaryDark"
        // data-aos="fade-in"
        // data-aos-duration="1000"
      >
        <div className="text-lg sm:text-2xl">Спасибо за заказ!</div>
        <div className="text-sm sm:text-lg pb-2 sm:pb-5">
          Давайте перед оплатой ещё раз проверим все данные заказа.
        </div>
      </div>

      {/* ================ Selected Products ==================== */}

      {cartPerfumes}

      {/* =================== Delivery Info ===================== */}

      {delivery}
    </div>
  );
};

export default ConfirmForm;
