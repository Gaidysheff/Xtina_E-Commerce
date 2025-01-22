import { Route, Routes } from "react-router";

import About from "./pages/About.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CommentsOnProduct from "./components/comments/CommentsOnProduct.jsx";
import Delivery from "./pages/Delivery.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/products/Products.jsx";
import SharedLayout from "./components/layout/SharedLayout.jsx";
import SharedProductsLayout from "./pages/products/SharedProductsLayout.jsx";
import SharedSingleProductLayout from "./pages/products/SharedSingleProductLayout.jsx";
import SingleProduct from "./pages/products/SingleProduct.jsx";

// URL settings for PRODUCT Section
export const parentRouteSet1 = "products";
const dynamicRouteSet1 = "productId";
const nestedRouteSet1 = "comments";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="*" element={<Error />} />

          <Route path={`${parentRouteSet1}`} element={<SharedProductsLayout />}>
            <Route index element={<Products />} />
            <Route
              path={`:${dynamicRouteSet1}`}
              element={<SharedSingleProductLayout />}
            >
              <Route index element={<SingleProduct />} />
              <Route
                path={`${nestedRouteSet1}`}
                element={<CommentsOnProduct />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
