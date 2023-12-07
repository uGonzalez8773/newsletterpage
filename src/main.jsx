import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Subscribed from "./pages/Subscribed";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/subscribed",
    element: <Subscribed />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
