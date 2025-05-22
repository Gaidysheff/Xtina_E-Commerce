import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.jsx";
// import { BrowserRouter } from "react-router";
import { HashRouter } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </StrictMode>
);
