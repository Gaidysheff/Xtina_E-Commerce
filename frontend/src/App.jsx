import { Route, Routes } from "react-router";
import { lazy, useEffect, useState } from "react";

import SharedLayout from "./components/layout/SharedLayout.jsx";

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
  // ============= Dynamic Imports ====================
  // const About = lazy(() => import("./pages/About.jsx"));

  const Cart = lazy(() => import("./pages/cart/Cart.jsx"));
  const CommentsOnConsumable = lazy(() =>
    import("./components/comments/CommentsOnConsumable.jsx")
  );
  const CommentsOnFreshener = lazy(() =>
    import("./components/comments/CommentsOnFreshener.jsx")
  );
  const CommentsOnPerfume = lazy(() =>
    import("./components/comments/CommentsOnPerfume.jsx")
  );
  const Consumables = lazy(() =>
    import("./pages/productConsumables/Consumables.jsx")
  );
  // const Contacts = lazy(() => import("./pages/Contacts.jsx"));
  const Delivery = lazy(() => import("./pages/Delivery.jsx"));
  const Error = lazy(() => import("./pages/Error.jsx"));
  const FreshenersFilteredWrapper = lazy(() =>
    import("./pages/productFreshener/FreshenersFilteredWrapper.jsx")
  );
  const Home = lazy(() => import("./pages/Home.jsx"));
  // const Perfumes = lazy(() => import("./pages/productPerfumes/Perfumes.jsx"));
  const PerfumesFilteredWrapper = lazy(() =>
    import("./pages/productPerfumes/PerfumesFilteredWrapper.jsx")
  );
  const SharedConsumablesLayout = lazy(() =>
    import("./pages/productConsumables/SharedConsumablesLayout.jsx")
  );
  const SharedFreshenersLayout = lazy(() =>
    import("./pages/productFreshener/SharedFreshenersLayout.jsx")
  );
  const SharedPerfumesLayout = lazy(() =>
    import("./pages/productPerfumes/SharedPerfumesLayout.jsx")
  );
  const SharedSingleConsumableLayout = lazy(() =>
    import("./pages/productConsumables/SharedSingleConsumableLayout.jsx")
  );
  const SharedSingleFreshenerLayout = lazy(() =>
    import("./pages/productFreshener/SharedSingleFreshenerLayout.jsx")
  );
  const SharedSinglePerfumeLayout = lazy(() =>
    import("./pages/productPerfumes/SharedSinglePerfumeLayout.jsx")
  );
  const SingleConsumable = lazy(() =>
    import("./pages/productConsumables/SingleConsumable.jsx")
  );
  const SingleFreshener = lazy(() =>
    import("./pages/productFreshener/SingleFreshener.jsx")
  );
  const SinglePerfume = lazy(() =>
    import("./pages/productPerfumes/SinglePerfume.jsx")
  );

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

        {/* <Route path="about" element={<About />} /> */}
        {/* <Route path="contacts" element={<Contacts />} /> */}
        <Route path="delivery" element={<Delivery />} />

        <Route path="*" element={<Error />} />

        <Route path={`${parentRouteSet1}`} element={<SharedPerfumesLayout />}>
          <Route index element={<PerfumesFilteredWrapper />} />
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
        <Route path={`${parentRouteSet2}`} element={<SharedFreshenersLayout />}>
          <Route index element={<FreshenersFilteredWrapper />} />
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
  );
}

export default App;

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
