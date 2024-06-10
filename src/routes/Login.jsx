import ilustration from "../assets/ilustra3.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin({ email, password })) {
      navigate("/events");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row content-all">
          <div className="col-lg-6 form-container d-flex flex-column justify-content-center p-5">
            <div className="logo">
              <h1 style={{ fontSize: "5rem" }}>Log In</h1>
              <p>
                Ingresa con tu cuenta de
                <Link to="/"> Events On Line</Link>
              </p>
            </div>
            {/* Formulario de registro */}
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group  mb-3">
                <label htmlFor="email">Correo</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group mt-2 mb-3">
                <label htmlFor="password">Contraseña</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group text-center">
                <p>
                  ¿Olvidaste tu contraseña?{" "}
                  <Link to="/">Recuperar contraseña</Link>
                </p>
              </div>

              <button type="submit" className="col-12 mb-4 btn">
                Iniciar Sesion{" "}
              </button>

              <div className="form-group text-center">
                <p>
                  ¿No tienes una Cuenta?, Crea una aquí{" "}
                  <Link to="/register">Registrate</Link>
                </p>
              </div>
            </form>
          </div>

          <div className="col-lg-6 contentCol">
            <h3 className="text-white p-5 text-center">
              Registrate y encuentra los mejores eventos en un solo lugar
            </h3>
            <img src={ilustration} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
