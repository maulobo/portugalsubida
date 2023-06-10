import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages";
const StateSale = lazy(() => import("./pages/stateSale/StateSale"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sale",
    element: <StateSale />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Esperando...</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
