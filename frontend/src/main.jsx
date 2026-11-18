
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { store } from "@/app/store";
import { router } from "@/app/router";
import "@/styles/index.css";

// =================================
// GLOBAL THEME INITIALIZATION
// =================================

const savedTheme = localStorage.getItem("theme");

const initialTheme =
  savedTheme === "dark" ? "dark" : "light";

document.documentElement.setAttribute(
  "data-mode",
  initialTheme
);

// =================================
// RENDER APPLICATION
// =================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </Provider>
  </StrictMode>
);
