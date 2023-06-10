import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./style.css";
import { Link } from "react-router-dom";

const Navbaar = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          fixed="top"
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="nav_title"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Inmobiliaria Portugal
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="nav_link">
                    Home
                  </Link>
                  <Link to="/sale" className="nav_link">
                    Inmuebles en venta
                  </Link>
                  <Link to="/contact" className="nav_link">
                    Contacto
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export { Navbaar };
