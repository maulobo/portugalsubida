import React, { useState } from "react";
import { Botton2 } from "../../components/Main/RenderCard1";
import FormAlquiler from "../../components/Main/FormAlquiler";
import FormVenta from "../../components/Main/FormVenta";
import { FormQuieroVender } from "../../components/Main/FormQuieroVender";
import { Navbaar } from "../../components/Main/Navbar";
import { Footer } from "../../components/Main/Footer";
import styled from "styled-components";
import { ScrollToTop } from "../../components/ScrollTop";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactosDiv from "../../components/Main/ContactosDiv";
import { Icons2 } from "../../components/Main/MapIcons";
import { Contactos } from "../home/Index";
import { animate, motion } from "framer-motion";
export const ContactHero = styled.header`
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8%;
  .title {
    font-size: 5vw;
    margin: 2rem 0 3rem 0;
    letter-spacing: 10px;
  }
  @media (max-width: 700px) {
    .title {
      font-size: 1.5em;
    }
  }
`;
export const ContactDiv = styled.section`
  display: flex;
  padding: 4rem 1rem;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: space-around;
    @media (max-width: 820px){
      .contact-info{
        width: 300px;
    }
    @media (max-width: 712px){
      padding: 2.5rem 1rem;
    }
    @media (max-width: 400px){
      

    }
`;
const Contact = () => {
  const [tipe, setTipe] = useState("comprar");

  let tipoForm;
  if (tipe === "alquilar") {
    tipoForm = <FormAlquiler />;
  } else if (tipe === "comprar") {
    tipoForm = <FormVenta />;
  } else {
    tipoForm = <FormQuieroVender />;
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inmobiliaria Portugal, contáctate</title>
          <meta
            name="author"
            content="Lobo Mauro Andrés, de Prado Valeria Anabel"
          />
          <meta
            name="description"
            content="Estamos comprometidos en brindarte un servicio personalizado y eficiente. Resuelve tus dudas y conoce nuestros servicios e inmuebles disponibles."
          />
          <meta
            name="keywords"
            content="inmobiliaria Cordoba, gestion inmobiliaria Cordoba, venta de inmuebles cordoba capital, alquiler de inmuebles cordoba, servicio de tasaciones inmobiliarias"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <Navbaar />
      <div className="contact-maxCont">
        <ContactHero>
          <h1 className="title">CONTACTO</h1>
          <p className="p-state">
            Estamos comprometidos en brindarte un servicio personalizado y
            eficiente. Resuelve tus dudas y conoce nuestros servicios e
            inmuebles disponibles.
          </p>
        </ContactHero>
        <div>
          <div className="contact-choose">
            <Botton2 verde margen verdeM onClick={() => setTipe("comprar")}>
              COMPRAR
            </Botton2>
            <Botton2 verde margen verdeM onClick={() => setTipe("alquilar")}>
              ALQUILAR
            </Botton2>
            <Botton2 verde margen verdeM onClick={() => setTipe("vender")}>
              VENDER
            </Botton2>
          </div>
          <ContactDiv>{tipe && tipoForm}</ContactDiv>
          <Contactos>
            <ContactosDiv>{Icons2}</ContactosDiv>
          </Contactos>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Contact };
