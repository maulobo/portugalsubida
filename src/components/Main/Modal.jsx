import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Swipper } from "./Swipper";
import "./style.css";
import { Contacto } from "./contacto";
import { BtnWhats } from "./BtnWhats";
import { FormPropiedades } from "./FormPropiedades";

export const ModaContainer = styled.div`
  padding: 2rem;
  background-color: #262626;
  color: #fff;
  border-radius: 5px;
  border-style: none;
  display: flex;
  flex-direction: column;
`;
export const ModalTitle = styled.h1`
  margin: 1rem 0;
  font-size: ${(prop) => (prop.main ? "2.5em" : "1.5em")};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: -20px;
    width: ${(prop) => (prop.first ? "40%" : "10%")};
    height: 8px;
    background-color: #dbab1e;
  }
  @media (max-width: 991px) {
    font-size: ${(prop) => (prop.main ? "2em" : "1.3em")};
  }
`;
export const InfoModalCont = styled.div`
  min-height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ModalIcons = styled.section`
  padding: ${(prop) => (prop.padingIconos ? "2rem 0" : ".5rem 0")};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    padding: ${(prop) => (prop.padingIconos ? "1rem 0" : ".5rem 0")};
  }
`;
export const ModalIconsCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(prop) =>
    prop.caracteristica ? "space-between" : "flex-start"};
  .icon {
    margin-right: 1rem;
    font-size: 1.5em;
  }
  @media (max-width: 991px) {
    margin: ${(prop) => (prop.terreno ? "0" : ".6rem")};
    .icon {
      font-size: 1em;
    }
  }
`;
export const ModalCaracteristicas = styled.section`
  margin: 2rem 0;
  padding: 0;
`;
export const ModalSaleCont = styled.h3`
  padding: 0.5rem 2rem 0.8rem 2rem;
  border: 3px solid #dbab1e;
  border-radius: 5px;
  margin: 0;
  @media (max-width: 991px) {
    font-size: 1.3em;
  }
  @media (max-width: 400px) {
    font-size: 1em;
  }
`;
export const ServicesC = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin: 3rem 0 0 0;
    justify-content: ${(prop) =>
      prop.contacto ? "center !important" : "space-between"};
  }
`;
export const H5 = styled.h5`
  font-size: 1.2em;
  @media (max-width: 991px) {
    font-size: 1em;
  }
`;

const Moodal = ({ datosCard, show, setShow }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ backgroundColor: "transparent" }}
      >
        <ModaContainer>
          <Swipper images={datosCard.images} />
          <br />
          <ModalIcons style={{ alignSelf: "flex-end" }}>
            <ModalSaleCont>
              {datosCard.operation}: {datosCard.price}
            </ModalSaleCont>
          </ModalIcons>
          <ModalIcons>
            <ModalTitle first main>
              {datosCard.name}
            </ModalTitle>
          </ModalIcons>
          <br />
          <br />
          <H5>Ubicación: {datosCard.localization}</H5>
          <H5>Tipo: {datosCard.kindOfProperty}</H5>
          <H5>Escritura: {datosCard.writing}</H5>
          <Modal.Body>
            <InfoModalCont>
              <ModalIcons padingIconos>
                <ModalIconsCont>
                  <FaBed className="icon" />
                  <p>{datosCard.room}</p>
                </ModalIconsCont>
                <ModalIconsCont>
                  <FaBath className="icon" />
                  <p>{datosCard.bathroom}</p>
                </ModalIconsCont>
                <ModalIconsCont>
                  <GiHomeGarage className="icon" />
                  <p>{datosCard.cochera}</p>
                </ModalIconsCont>
                <ModalIconsCont>
                  <BsArrowsFullscreen className="icon" />
                  <p>{datosCard.surface}</p>
                </ModalIconsCont>
              </ModalIcons>
              <ModalTitle>Descripción</ModalTitle>
              <section style={{ margin: "2rem 0" }}>
                <p>{datosCard.description}</p>
                <p>{datosCard.description2}</p>
                <p>{datosCard.description3}</p>
              </section>
            </InfoModalCont>
            <ModalTitle>Características generales</ModalTitle>
            <br />
            <ModalCaracteristicas>
              <ModalIconsCont caracteristica>
                <p>Antiguedad:</p>
                <p> {datosCard.antiquity}</p>
              </ModalIconsCont>
              <hr />
              <ModalIconsCont caracteristica>
                <p>Superficie cubierta:</p>
                <p>{datosCard.surfaceBuild}</p>
              </ModalIconsCont>
              <hr />
              <ModalIconsCont caracteristica>
                <p>Superficie Total:</p>
                <p>{datosCard.surface}</p>
              </ModalIconsCont>
              <hr />
              <ModalIconsCont caracteristica>
                <p>Baños:</p>
                <p>{datosCard.bathroom}</p>
              </ModalIconsCont>
              <hr />
              <ModalIconsCont caracteristica>
                <p>Habitaciones:</p>
                <p>{datosCard.room}</p>
              </ModalIconsCont>
              <hr />
              <ModalIconsCont caracteristica>
                <p>Cocina:</p>
                <p>{datosCard.kitchen}</p>
              </ModalIconsCont>
              <hr />
              <ModalIconsCont caracteristica>
                <p>Garaje:</p>
                <p>{datosCard.cochera}</p>
              </ModalIconsCont>
              <hr />
              <ModalIconsCont caracteristica>
                <p>Piscina:</p>
                <p>{datosCard.pool}</p>
              </ModalIconsCont>
              <hr />
              <br />
              <ModalTitle>Servicios</ModalTitle>
              <ServicesC>
                <section>
                  {datosCard.services.map((service, ind) => (
                    <p style={{ marginBottom: ".5rem" }} key={ind}>
                      {service} ✔
                    </p>
                  ))}
                </section>
                <section>
                  {datosCard.services2.map((service2, inde) => (
                    <p style={{ marginBottom: ".5rem" }} key={inde}>
                      {service2} ✔
                    </p>
                  ))}
                </section>
                <hr />
              </ServicesC>
            </ModalCaracteristicas>
            <br />
            <p>
              Si desea mas informacion sobre esta propiedad, porfavor, rellene
              el siguiente formulario.
            </p>
            <br />
            <FormPropiedades />
            <BtnWhats />
            <Contacto />
          </Modal.Body>
        </ModaContainer>
      </Modal>
    </>
  );
};

export { Moodal };
