import React, { useContext, useState } from "react";

import CartContext from "./../../store/cart-context.js";
import CartItem from "./CartItem/CartItem.jsx";
import Modal from "./../../components/modalWindow/Modal.jsx";

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
    <ul className="list-none m-0 p-0 max-h-[20rem] overflow-auto">
      {cartContext.items.map((item, index) => (
        <CartItem
          key={index}
          id={item.id}
          name={item.name}
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
      <section className="px-5 sm:px-0">
        <div className="container">
          {cartPerfumes}
          <div
            className="flex justify-between items-center font-semibold my-[1rem]
          text-xl"
          >
            <span>Итого:</span>
            <span>{totalAmount}</span>
          </div>
          <div className="text-end">
            <button
              onClick={props.onHideCart}
              className="cursor-pointer bg-transparent border-2 
            border-red-500 py-2 px-4 rounded-xl ml-2 hover:bg-primary
            hover:text-black hover:ring hover:ring-blue-500 active:bg-primary
            active:text-black active:ring active:ring-blue-500 focus:bg-primary
            focus:text-black focus:ring focus:ring-blue-500"
            >
              Закрыть
            </button>

            {hasItems && (
              <button
                className="cursor-pointer bg-transparent border-2 
            border-red-500 py-2 px-4 rounded-xl ml-2 hover:bg-primary
            hover:text-black hover:ring hover:ring-blue-500 active:bg-primary
            active:text-black active:ring active:ring-blue-500 focus:bg-primary
            focus:text-black focus:ring focus:ring-blue-500"
              >
                Заказать
              </button>
            )}
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default Cart;
