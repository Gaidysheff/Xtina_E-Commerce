import OrderContext from "./order-context";
import { useReducer } from "react";

const defaultOrderState = {
  shipping: [],
};

const orderReducer = (state, action) => {
  if (action.type === "ADD_SHIPPING") {
    const updatedShipping = state.shipping.concat(action.shipping);
    return {
      shipping: updatedShipping,
    };
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

  const orderContext = {
    shipping: orderState.shipping,
    addOrder: addOrderHandler,
  };
  return (
    <OrderContext.Provider value={orderContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
