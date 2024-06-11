import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();

  return (
    <Navbar className="navbar-custom" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{ fontSize: "2rem" }} as={Link} to="/">
          Events On Line
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* Agrega la clase "ms-auto" */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/register"
                active={location.pathname === "/register"}
              >
                Registrarse
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/login"
                active={location.pathname === "/login"}
              >
                Iniciar Sesión
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/events"
                active={location.pathname === "/events"}
              >
                Eventos
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
