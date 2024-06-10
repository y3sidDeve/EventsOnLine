import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ilustration from "../assets/ilustra2.svg";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, lastname, email, password });
    navigate("/login");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row content-all">
          <div className="col-lg-6 form-container d-flex flex-column justify-content-center p-5">
            <div className="logo">
              <h1>Events On Line</h1>
              <p>Por favor, ingresa tus datos para registrarte</p>
            </div>
            {/* Formulario de registro */}
            <form onSubmit={handleSubmit} className="form">
              <div className="row">
                <div className="form-group mb-3 col-lg-6">
                  <label htmlFor="name">Nombre</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label htmlFor="lastname">Apellido</label>
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    id="lastname"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Correo</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="form-control"
                />
              </div>

              <hr />

              <div className="form-group mb-3">
                <label htmlFor="password">Contraseña</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="form-control"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Confirmar contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                />
              </div>

              <button type="submit" className="col-12 mb-4 btn">
                Registrarme{" "}
              </button>

              <div className="form-group">
                <p>
                  Al registrarte, aceptas nuestros{" "}
                  <Link to="/terms">Términos y condiciones</Link> y la{" "}
                  <Link to="/privacy">Política de privacidad</Link>
                </p>
              </div>

              <div className="form-group text-center">
                <p>
                  ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
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

export default Register;
