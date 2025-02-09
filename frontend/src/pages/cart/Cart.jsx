import React, { useContext, useState } from "react";

import CartContext from "./../../store/cart-context.js";
import CartItem from "./CartItem.jsx";
import Modal from "./../../components/modalWindow/Modal.jsx";
import { NumericFormat } from "react-number-format";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${Math.abs(cartContext.totalAmount).toFixed(0)} ₽`;
  // const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id, volume) => {
    cartContext.removeItem(id, volume);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartPerfumes = (
    <ul
      className="list-none m-0 p-0 overflow-auto max-h-[400px] 
      sm:max-h-[550px]"
    >
      {cartContext.items.map((item, index) => (
        <CartItem
          key={index}
          id={item.id}
          name={item.name}
          image={item.image}
          amount={item.amount}
          price={item.price}
          volume={item.volume}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id, item.volume)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className="flex flex-col">
        <div
          onClick={props.onHideCart}
          class="self-end w-8 h-8 text-3xl text-primaryDark rounded-md
        flex justify-center items-center border-2 cursor-pointer
        border-primaryDark 
                hover:bg-gradient-to-br hover:from-primaryLight 
                hover:to-primaryDark hover:text-white hover:ring 
                hover:border-white hover:ring-primaryDark/70"
        >
          <div className="pb-1">&times;</div>
        </div>
        {!hasItems && (
          <p
            className="text-2xl sm:text-4xl italic text-center my-5
            text-primaryDark/80 font-['Pacifico']
            drop-shadow-[10px_10px_6px_rgba(100,100,100,.9)]"
          >
            Ваша корзина пуста.
          </p>
        )}
        <section>
          <div className="container">
            {cartPerfumes}
            <div
              className="flex justify-between items-center font-semibold my-[1rem]
            text-xl"
            >
              <p className="text-gray-400">Итого:</p>
              <NumericFormat
                className="flex justify-start text-3xl sm:text-5xl pb-2
                text-primaryDark"
                value={totalAmount}
                displayType={"text"}
                decimalSeparator=","
                thousandSeparator="."
                suffix={" ₽"}
              />
            </div>
            <div className="text-end">
              {hasItems && (
                <button
                  className="cursor-pointer bg-transparent text-primaryDark ml-2
                font-semibold border-2 border-primaryDark py-2 px-4 rounded-xl 
                hover:bg-gradient-to-br hover:from-primaryLight 
                hover:to-primaryDark hover:text-white hover:ring 
                hover:border-white hover:ring-primaryDark/70"
                >
                  Заказать
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default Cart;
