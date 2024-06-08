import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// importaciones de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


// importaciones  para react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importaciones de componentes de rutas
import Home from "./routes/Home";
import Register from "./routes/Register";
import LoginPage from "./routes/Login";
import Events from "./routes/Events";


const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Not found</div>,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/events",
    element: <Events />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
