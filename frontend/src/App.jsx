import { Route, Routes } from "react-router";

import About from "./pages/About.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CommentsOnFreshener from "./components/comments/CommentsOnFreshener.jsx";
import CommentsOnPerfume from "./components/comments/CommentsOnProduct.jsx";
import Delivery from "./pages/Delivery.jsx";
import Error from "./pages/Error.jsx";
import Fresheners from "./pages/productFreshener/Fresheners.jsx";
import Home from "./pages/Home.jsx";
import Perfumes from "./pages/productPerfumes/Perfumes.jsx";
import SharedFreshenersLayout from "./pages/productFreshener/SharedFreshenersLayout.jsx";
import SharedLayout from "./components/layout/SharedLayout.jsx";
import SharedPerfumesLayout from "./pages/productPerfumes/SharedPerfumesLayout.jsx";
import SharedSingleFreshenerLayout from "./pages/productFreshener/SharedSingleFreshenerLayout.jsx";
import SharedSinglePerfumeLayout from "./pages/productPerfumes/SharedSinglePerfumeLayout.jsx";
import SingleFreshener from "./pages/productFreshener/SingleFreshener.jsx";
import SinglePerfume from "./pages/productPerfumes/SinglePerfume.jsx";

// URL settings for PERFUMES Section
export const parentRouteSet1 = "perfumes";
export const dynamicRouteSet1 = "perfumeId";
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

          <Route path={`${parentRouteSet1}`} element={<SharedPerfumesLayout />}>
            <Route index element={<Perfumes />} />
            <Route
              path={`:${dynamicRouteSet1}`}
              element={<SharedSinglePerfumeLayout />}
            >
              <Route index element={<SinglePerfume />} />
              <Route
                path={`${nestedRouteSet1}`}
                element={<CommentsOnPerfume />}
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
