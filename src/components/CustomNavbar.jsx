import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();

  return (
    <Navbar className="navbar-custom" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand style={{fontSize : "2rem"}}  href="/">Events On Line</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Agrega la clase "ms-auto" */}
            <Nav.Link href="/" active={location.pathname === "/"}>
              Inicio
            </Nav.Link>
            <Nav.Link
              href="/register"
              active={location.pathname === "/register"}
            >
              Registrarse
            </Nav.Link>
            <Nav.Link href="/login" active={location.pathname === "/login"}>
              Iniciar Sesión
            </Nav.Link>
            <Nav.Link href="/events" active={location.pathname === "/events"}>
              Eventos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
