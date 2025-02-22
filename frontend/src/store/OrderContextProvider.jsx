import OrderContext from "./order-context";
import { useReducer } from "react";

const defaultOrderState = {
  shipping: [],
};

const orderReducer = (state, action) => {
  if (action.type === "ADD_SHIPPING") {
    // const updatedShipping = state.shipping.concat(action.shipping);
    const currentState = state.shipping;
    // console.log("current=", currentState);
    // console.log("LENGTH=", currentState.length);

    if (currentState.length > 0) {
      const addedShipping = state.shipping.concat(action.shipping);
      const updatedShipping = addedShipping.slice(1);
      // console.log("updated2=", updatedShipping);
      return {
        shipping: updatedShipping,
      };
    } else {
      const updatedShipping = state.shipping.concat(action.shipping);
      // console.log("updated1=", updatedShipping);
      return {
        shipping: updatedShipping,
      };
    }

    // return {
    //   shipping: updatedShipping,
    // };
  }

  if (action.type === "CLEAR_CART") {
    return defaultCartState;
  }

  return defaultOrderState;
};

const OrderContextProvider = (props) => {
  const [orderState, dispatchOrderAction] = useReducer(
    orderReducer,
    defaultOrderState
  );

  const addOrderHandler = (order) => {
    dispatchOrderAction({
      type: "ADD_SHIPPING",
      shipping: order,
    });
  };

  const clearCartHandler = () => {
    dispatchOrderAction({ type: "CLEAR_CART" });
  };

  const orderContext = {
    shipping: orderState.shipping,
    addOrder: addOrderHandler,
    clearCart: clearCartHandler,
  };

  return (
    <OrderContext.Provider value={orderContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
