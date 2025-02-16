import "./CartButton.css";

import { useContext, useEffect, useState } from "react";

import CartContext from "../../../../store/cart-context";
import { FaCartShopping } from "react-icons/fa6";

const NavbarCartButton = (props) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((accumulated, item) => {
    return accumulated + item.amount;
  }, 0);

  const buttonClasses = `${isButtonAnimated ? "bump" : ""}`;

  useEffect(() => {
    if (cartContext.items.length === 0) {
      return;
    }

    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <button
      className={buttonClasses}
      onClick={props.onClick}
      disabled={props.cartButtonIsDisabled}
    >
      <div className="relative p-3 group hover:scale-125">
        <FaCartShopping
          className="text-xl text-gray-600
                dark:text-gray-400 group-hover:text-primaryDark"
        />
        <div
          className="w-4 h-4 bg-red-500 text-white rounded-full 
                  absolute top-0 right-0 flex items-center justify-center text-xs
                  group-hover:bg-gradient-to-r from-primary to-primaryDark"
        >
          {cartItemsNumber}
        </div>
      </div>
    </button>
  );
};

export default NavbarCartButton;
