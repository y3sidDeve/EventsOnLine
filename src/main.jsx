import React, { useState } from "react";
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
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./routes/Error";

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogin = (credentials) => {
    const storedUser = JSON.parse(localStorage.getItem("user")); // Obtiene el usuario almacenado en localStorage
    // Verifica si el usuario almacenado en localStorage coincide con las credenciales ingresadas
    if (
      storedUser && // Verifica si el usuario almacenado en localStorage existe
      storedUser.email === credentials.email &&  // Verifica si el email del usuario almacenado en localStorage coincide con el email ingresado
      storedUser.password === credentials.password // Verifica si la contraseña del usuario almacenado en localStorage coincide con la contraseña ingresada
    ) {
      setUser(storedUser); // Establece el usuario almacenado en localStorage como usuario actual
      return true; // Retorna verdadero
    }
    return false; // Retorna falso
  };

  const isAuthenticated = !!user;

  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register onRegister={handleRegister} />,
    },
    {
      path: "/login",
      element: <LoginPage onLogin={handleLogin} />,
    },
    {
      path: "/events",
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Events />
        </ProtectedRoute>
      ),
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
