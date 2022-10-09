import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { Dashboard } from "./components/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
