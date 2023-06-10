import React from "react";
import logo from "../Images/logo.png";
import { Botton2 } from "./RenderCard1";
import { Link } from "react-router-dom";
import "./style.css";

const Hero = () => {
  return (
    <>
      <header className="hero">
        <img src={logo} className="hero-logo" alt="logo" />
        <h1 style={{ display: "none" }}>Inmobiliaria Portugal</h1>
        <h3 className="hero-text">
          Servicio a medida y propiedades de alta calidad para particulares e
          inversores exigentes. ¡Confía en nosotros para encontrar la propiedad
          de tus sueños!
        </h3>
        <Link to="/contact" className="nav_link">
          <Botton2 style={{ marginTop: "1rem" }}>CONECTATE</Botton2>
        </Link>
      </header>
    </>
  );
};

export { Hero };
