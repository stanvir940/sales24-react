import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Layout from "./components/Layout.jsx";
import MenFashion from "./components/men-fashion/MenFashion.jsx";
import Page from "./components/product/ProductDetails.jsx";
import RetailProduct from "./components/retail/RetailProduct.jsx";
import SignUp from "./components/signUp/SignUp.jsx";
import WomenFashion from "./components/women-fashion/WomenFashion.jsx";
import ErrorPage from "./error/error-page.jsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product-details/:id",
        element: <Page />,
      },
      {
        path: "/retail-product",
        element: <RetailProduct />,
      },
      {
        path: "/women-fashion",
        element: <WomenFashion />,
      },
      {
        path: "/men-fashion",
        element: <MenFashion />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
