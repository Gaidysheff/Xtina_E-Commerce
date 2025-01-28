import { Route, Routes } from "react-router";

import About from "./pages/About.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CommentsOnFreshener from "./components/comments/CommentsOnFreshener.jsx";
import CommentsOnProduct from "./components/comments/CommentsOnProduct.jsx";
import Delivery from "./pages/Delivery.jsx";
import Error from "./pages/Error.jsx";
import Fresheners from "./pages/productFreshener/Fresheners.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/products/Products.jsx";
import SharedFreshenersLayout from "./pages/productFreshener/SharedFreshenersLayout.jsx";
import SharedLayout from "./components/layout/SharedLayout.jsx";
import SharedProductsLayout from "./pages/products/SharedProductsLayout.jsx";
import SharedSingleFreshenerLayout from "./pages/productFreshener/SharedSingleFreshenerLayout.jsx";
import SharedSingleProductLayout from "./pages/products/SharedSingleProductLayout.jsx";
import SingleFreshener from "./pages/productFreshener/SingleFreshener.jsx";
import SingleProduct from "./pages/products/SingleProduct.jsx";

// URL settings for PRODUCT Section
export const parentRouteSet1 = "products";
export const dynamicRouteSet1 = "productId";
const nestedRouteSet1 = "comments";
// URL settings for FRESHENERS Section
export const parentRouteSet2 = "fresheners";
export const dynamicRouteSet2 = "freshenerId";
const nestedRouteSet2 = "comments";

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
          <Route
            path={`${parentRouteSet2}`}
            element={<SharedFreshenersLayout />}
          >
            <Route index element={<Fresheners />} />
            <Route
              path={`:${dynamicRouteSet2}`}
              element={<SharedSingleFreshenerLayout />}
            >
              <Route index element={<SingleFreshener />} />
              <Route
                path={`${nestedRouteSet2}`}
                element={<CommentsOnFreshener />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
