
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/components/layout/MainLayout";

import HomePage from "@/pages/shop/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,children: [
      { path: "/",element: <HomePage />, },
      { path: "*",element: <NotFoundPage />, },
    ],
  },

  // Authentication pages (without the main header/footer)
  { path: "/login",element: <Login />, },
  { path: "/signup",element: <Signup />, },
]);
