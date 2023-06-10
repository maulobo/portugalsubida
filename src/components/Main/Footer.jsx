import React from "react";
import logo from "../Images/logo.png";


const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-container2">
        <div className="footer-info">
          <h5>Portugal inmobiliaria.</h5>
          <p>Administración de propiedades</p>
          <p>Asesoramiento Jurídico - Contable - Inmobiliario </p>
          <p>Ventas - Alquileres - Tasaciones</p>
          <p>351-7633299</p>
          <p>San José de Calazans y Duarte Q.</p>
          <p>@portugalinmobiliaria</p>
          <p>inmobiliariaportugal@gmail.com</p>
        </div>
        <div className="footer-simbol">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>
      </section>
      <p className="footer-info">
        © Built with pride and caffeine by Anabel de Prado y Mauro Lobo. All
        rights reserved.
      </p>
    </div>
  );
};

export { Footer };
