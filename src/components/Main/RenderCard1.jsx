import React from "react";
import { useState } from "react";
import { TitleI } from "./Title";
import { Moodal } from "./Modal";
import { ModalTerreno } from "./ModalTerreno";
import "./style.css";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Botton2 = styled.button`
  font-weight: 600;
  letter-spacing: 2px;
  padding: 0.6rem 2rem;
  margin: ${(prop) => (prop.margen ? "1rem" : "0")};
  border: ${(prop) =>
    prop.verdeM ? " 4px solid #1F5436" : "4px solid var(--color-dos)"};
  border-radius: 5px;
  background-color: ${(prop) => (prop.verde ? "#1F5436" : "var(--color-dos)")};
  color: #fff;
  min-width: 5em;
  transition: 200ms ease-in-out;
  &:hover {
    background-color: transparent;
  }
`;
export const ImgContent = styled.div`
  height: 55vh;
  width: 30vw;
  .card-img {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
  @media only screen and (max-width: 1190px) {
    height: 50vh;
    width: 50vh;
  }
  @media only screen and (max-width: 844px) {
    height: 55vh;
    width: 43vh;
  }

  @media only screen and (max-width: 400px) {
    height: 45vh;
    width: 38vh;
  }
`;
export const CardBoxContain = styled.section`
  max-width: 30vw;
  min-width: 250px;
  height: 100%;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 661px) {
    min-width: 300px;
  }
  @media only screen and (max-width: 400px) {
    min-width: 230px;
  }
`;

const RenderCard1 = ({ el }) => {
  const [datosCard, setDatosCard] = useState(null);
  const [show, setShow] = useState(false);
  const [tipo, setTipo] = useState(null);

  const { name, description, image } = el;

  return (
    <div className="card-container">
      <ImgContent>
        <img src={image} alt={image} className="card-img" />
      </ImgContent>
      <CardBoxContain>
        <TitleI>{name}</TitleI>
        <p>{description}</p>
        <div>
          <Botton2
            onClick={(handleShow) => {
              setDatosCard(el);
              setShow(true);
              setTipo(el.kindOfProperty);
            }}
          >
            VER MAS
          </Botton2>
        </div>
      </CardBoxContain>

      {(tipo === "Casa" || tipo === "Departamento") && (
        <Moodal
          show={show}
          setShow={setShow}
          datosCard={datosCard}
          setDatosCard={setDatosCard}
        />
      )}

      {(tipo === "Terreno" || tipo === "Galpon" || tipo === "Desarrollo") && (
        <ModalTerreno
          show={show}
          setShow={setShow}
          datosCard={datosCard}
          setDatosCard={setDatosCard}
        />
      )}
    </div>
  );
};

export default RenderCard1;
