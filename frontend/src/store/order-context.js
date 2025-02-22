import React from "react";

const OrderContext = React.createContext({
  shipping: [],
  addOrder: (order) => {},
  clearOrder: () => {},
});

export default OrderContext;
