import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

import { Swipper } from "./Swipper";
import "./style.css";
import { ModaContainer } from "./Modal";
import { ModalIcons } from "./Modal";
import { ModalSaleCont } from "./Modal";
import { ModalTitle } from "./Modal";
import { ModalIconsCont } from "./Modal";
import { BsArrowsFullscreen } from "react-icons/bs";
import { ServicesC } from "./Modal";
import { Contacto } from "./contacto";
import { BtnWhats } from "./BtnWhats";
import { FormPropiedades } from "./FormPropiedades";

export const Padding = styled.h5`
  padding: 0.3rem 0;
`;
const ModalTerreno = ({ datosCard, show, setShow, setDatosCard }) => {
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
          <Swipper images={datosCard.images} tipo={datosCard.kindOfProperty} />
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
          <Padding>Ubicación: {datosCard.localization}</Padding>
          <Padding>Tipo: {datosCard.kindOfProperty}</Padding>
          {datosCard.kindOfProperty === "Terreno" ||
          datosCard.kindOfProperty === "Galpon" ? (
            <Padding>Escritura: {datosCard.writing}</Padding>
          ) : (
            ""
          )}
          {datosCard.kindOfProperty === "Terreno" ||
          datosCard.kindOfProperty === "Galpon" ? (
            <ModalIconsCont terreno>
              <BsArrowsFullscreen className="icon" />
              <Padding>{datosCard.surface}</Padding>
            </ModalIconsCont>
          ) : (
            ""
          )}
          <Modal.Body>
            <ModalTitle>Descripción</ModalTitle>
            <section style={{ margin: "3rem 0" }}>
              <p>{datosCard.description}</p>
              <p>{datosCard.description2}</p>
            </section>
            <ModalTitle>Características generales</ModalTitle>
            <ServicesC>
              <section>
                {datosCard.characteristics.map((caracteristicas, ind) => (
                  <p style={{ marginBottom: ".5rem" }} key={ind}>
                    {caracteristicas} ✔
                  </p>
                ))}
              </section>
              <section>
                {datosCard.characteristics2.map((caracteristicas2, inde) => (
                  <p style={{ marginBottom: ".5rem" }} key={inde}>
                    {caracteristicas2} ✔
                  </p>
                ))}
              </section>
              {datosCard.kindOfProperty === "Desarrollo" ? (
                <section>{datosCard.datosConstructora}</section>
              ) : (
                ""
              )}
              <hr />
            </ServicesC>
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

export { ModalTerreno };
