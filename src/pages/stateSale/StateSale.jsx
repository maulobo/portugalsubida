import React, { Suspense, lazy, useRef, useState } from "react";
import { ContainerII } from "../../components/ContainerII";
import { DivMio } from "../../components/DivMio";
import { Navbaar } from "../../components/Main/Navbar";
import ediMuestra from "../../components/Images/ediSale.webp";
import { Button } from "../../components/Main/Btns";
import RenderCard1 from "../../components/Main/RenderCard1";
import { ContainerIII } from "../../components/ContainerIII";
import { Footer } from "../../components/Main/Footer";
import { CSSTransition } from "react-transition-group";
import { HeroPagess } from "../../components/Main/HeroPages";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
//DATA INMUEBLES
import { dataArray } from "../../components/data";
import { ScrollToTop } from "../../components/ScrollTop";
import { Boton2 } from "../../components/Boton2";

export const DivBttnes = styled.div`
  display: flex;
  gap: 20px 30%;
  @media only screen and (max-width: 710px) {
    flex-direction: column;
  }
`;
export const Span = styled.span`
  color: #fff;
  font-size: 0.8em;
  margin: 0;
  align-self: self-start;
`;

const StateSale = () => {
  const [tipo, setTipo] = useState("");
  const [local, setLocal] = useState("");
  const [rooms, setRooms] = useState("");
  const [search, setSearch] = useState(true);
  const nodeRef = useRef(null);
  const [inProp, setInProp] = useState(false);

  const handleSelectTipo = (e) => {
    setTipo(e.target.value);

    setSearch(false);
  };
  const handleSelectLocal = (e) => {
    setLocal(e.target.value);

    setSearch(false);
  };
  const handleSelectRooms = (e) => {
    setRooms(e.target.value);
    setSearch(false);
  };

  const handleClick = (e) => {
    console.log(tipo);
    setSearch(true);
    setInProp(true);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inmobiliaria Portugal, venta y alquiler de inmuebles</title>
          <meta
            name="author"
            content="Lobo Mauro Andrés, de Prado Valeria Anabel"
          />
          <meta
            name="description"
            content=" Nos enfocamos en entender las necesidades y objetivos de cada cliente individualmente para poder ofrecer soluciones adaptadas a sus necesidades."
          />
          <meta
            name="keywords"
            content="inmobiliaria Cordoba, gestion inmobiliaria Cordoba, venta de inmuebles cordoba capital, alquiler de inmuebles cordoba, servicio de tasaciones inmobiliarias"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <ScrollToTop />
      <Navbaar />
      <HeroPagess></HeroPagess>
      <main className="colorMain">
        <ContainerII>
          <DivMio>
            <img src={ediMuestra} alt="state" className="fotito" />
          </DivMio>
          <DivMio icons2>
            <Span>Tipo de propiedad</Span>
            <select
              name="tipo"
              id="tipo"
              className="select-state"
              onChange={handleSelectTipo}
            >
              <option value="">Todos</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="desarrollo">Desarrollo</option>
              <option value="galpon">Galpon</option>
              <option value="terreno">Terreno</option>
            </select>
            <Span>Ubicación</Span>
            <select
              name="Ubicación"
              id="Ubicación"
              className="select-state"
              onChange={handleSelectLocal}
            >
              <option value="">Todos</option>
              <option value="agua de oro">Agua de Oro</option>
              <option value="alberdi">Alberdi</option>
              <option value="anisacate">Anisacate</option>
              <option value="arguello">Argüello</option>
              <option value="capital">Capital</option>
              <option value="centro">Centro</option>
              <option value="despeñaderos">Despeñaderos</option>
              <option value="guemes">Guemes</option>
              <option value="nueva">Nueva Córdoba</option>
              <option value="martin">Barrio San Martín</option>
              <option value="cercano">Valle Cercano</option>
              <option value="allende">Villa Allende</option>
              <option value="villa belgrano">Villa Belgrano</option>
            </select>
            <Span>Cantidad de Habitaciones</Span>
            <select
              name="Habitaciones"
              id="Habitaciones"
              className="select-state"
              onChange={handleSelectRooms}
            >
              <option value="">Todos</option>
              <option value="1">Una</option>
              <option value="2">Dos</option>
              <option value="3">Tres</option>
              <option value="4">Cuatro</option>
              <option value="5">Cinco</option>
            </select>
            <DivBttnes>
              <Boton2 onClick={handleClick}>BUSCAR</Boton2>
              <Boton2
                margen
                onClick={() => {
                  setSearch("");
                }}
              >
                <span className="spaan">BORRAR</span>
              </Boton2>
            </DivBttnes>
          </DivMio>
        </ContainerII>
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={300}
          classNames="my-node"
        >
          <ContainerIII ref={nodeRef}>
            {search &&
              dataArray
                .filter((el) => el.kindOfProperty.toLowerCase().includes(tipo))
                .filter((el) => el.localization.toLowerCase().includes(local))
                .filter((el) => el.room.toLowerCase().includes(rooms))
                .map((el, id) => {
                  return <RenderCard1 el={el} key={id} />;
                })}
          </ContainerIII>
        </CSSTransition>
      </main>
      <Footer />
    </>
  );
};

export default StateSale;
