import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

import About from "./pages/About.jsx";
import Cart from "./pages/cart/Cart.jsx";
import CommentsOnConsumable from "./components/comments/CommentsOnConsumable.jsx";
import CommentsOnFreshener from "./components/comments/CommentsOnFreshener.jsx";
import CommentsOnPerfume from "./components/comments/CommentsOnPerfume.jsx";
import Consumables from "./pages/productConsumables/Consumables.jsx";
import Contacts from "./pages/Contacts.jsx";
import Delivery from "./pages/Delivery.jsx";
import Error from "./pages/Error.jsx";
import Fresheners from "./pages/productFreshener/Fresheners.jsx";
import Home from "./pages/Home.jsx";
import Perfumes from "./pages/productPerfumes/Perfumes.jsx";
import SharedConsumablesLayout from "./pages/productConsumables/SharedConsumablesLayout.jsx";
import SharedFreshenersLayout from "./pages/productFreshener/SharedFreshenersLayout.jsx";
import SharedLayout from "./components/layout/SharedLayout.jsx";
import SharedPerfumesLayout from "./pages/productPerfumes/SharedPerfumesLayout.jsx";
import SharedSingleConsumableLayout from "./pages/productConsumables/SharedSingleConsumableLayout.jsx";
import SharedSingleFreshenerLayout from "./pages/productFreshener/SharedSingleFreshenerLayout.jsx";
import SharedSinglePerfumeLayout from "./pages/productPerfumes/SharedSinglePerfumeLayout.jsx";
import SingleConsumable from "./pages/productConsumables/SingleConsumable.jsx";
import SingleFreshener from "./pages/productFreshener/SingleFreshener.jsx";
import SinglePerfume from "./pages/productPerfumes/SinglePerfume.jsx";

// URL settings for PERFUMES Section
export const parentRouteSet1 = "perfumes";
export const dynamicRouteSet1 = "perfumeSlug";
const nestedRouteSet1 = "comments";
// URL settings for FRESHENERS Section
export const parentRouteSet2 = "fresheners";
export const dynamicRouteSet2 = "freshenerSlug";
const nestedRouteSet2 = "comments";
// URL settings for CONSUMABLES Section
export const parentRouteSet3 = "consumables";
export const dynamicRouteSet3 = "consumableSlug";
const nestedRouteSet3 = "comments";

function App(props) {
  // ================= THEMES =========================

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const themeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    // props.onChangeTheme(theme);
  };

  // Access to html element
  const element = document.documentElement;
  // console.log(element);

  // set theme to localStorage and html-element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout themeHandler={themeHandler} theme={theme} />}
        >
          <Route
            index
            element={<Home themeHandler={themeHandler} theme={theme} />}
          />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
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
          <Route
            path={`${parentRouteSet3}`}
            element={<SharedConsumablesLayout />}
          >
            <Route index element={<Consumables />} />
            <Route
              path={`:${dynamicRouteSet3}`}
              element={<SharedSingleConsumableLayout />}
            >
              <Route index element={<SingleConsumable />} />
              <Route
                path={`${nestedRouteSet3}`}
                element={<CommentsOnConsumable />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
