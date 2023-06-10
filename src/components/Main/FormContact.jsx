import React from "react";
import { Formulario } from "./Form";
import logo3 from "../../components/Images/logo3.png";
import { TitleI } from "./Title";
import { OuserBack } from "./OurServices";
import { OurserLogo } from "./OurServices";

const FormContact = () => {

    return (
      <OuserBack>
        <div className="ourserv-box ourserv-cont">
          <TitleI corto style={{marginBottom:"3rem"}}>CONTÁCTATE</TitleI>
          <p >
          Estamos comprometidos en brindarte un servicio personalizado y eficiente. Completa el formulario y un asesor se comunicará contigo. Resuelve tus dudas y conoce nuestros servicios e inmuebles disponibles.
          </p>
         <br />
          <section className="contForm">
           <Formulario/>
          </section>
        </div>
        <OurserLogo green className="ourserv-box">
          <img src={logo3} alt="logo" className="img-logo" />
        </OurserLogo>
      </OuserBack>
    );
  };
  
  export {FormContact};