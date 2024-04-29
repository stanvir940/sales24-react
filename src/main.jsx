import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error/error-page.jsx";
import Root from "./routes/root.jsx";
import SignUp from "./components/signUp/SignUp.jsx";
import Home from "./components/home/Home.jsx";
import Page from "./components/product-page/Page.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
        children: [
          {
            path: "page/:id",
            element: <Page></Page>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
