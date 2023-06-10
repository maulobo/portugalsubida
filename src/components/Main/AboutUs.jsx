import React from "react";
import { ContainerI } from "../ContainerI";
import { DivMio } from "../DivMio";
import aboutus from "../Images/aboutus.webp";
import "./style.css";
import { TitleI } from "./Title";

import { DivBttnes } from "../../pages/stateSale/StateSale";
import { Link } from "react-router-dom";
import { Boton2 } from "../Boton2";

const AboutUs = () => {
  return (
    <>
      <ContainerI>
        <DivMio>
          <img
            src={aboutus}
            alt="edificio1"
            style={{ height: "80vh", objectFit: "cover" }}
          />
        </DivMio>
        <DivMio auto>
          <TitleI green style={{ marginBottom: "3rem" }}>
            SOBRE NOSOTROS
          </TitleI>
          <p>
            Somos una empresa familiar que, manteniendo los valores de nuestros
            fundadores en el centro de nuestras operaciones, nos comprometemos a
            trabajar con transparencia y dedicación para ayudar a nuestros
            clientes a tomar decisiones informadas y acertadas.
          </p>
          <br />
          <p>
            Tenemos profesionales en cada área que precises: Ventas, Alquileres,
            Asesoramiento legal y contable, Tasaciones
          </p>
          <p>No dudes en ponerte en contacto.</p>
          <br />
          <DivBttnes>
            <Link to="/sale" className="nav_link">
              <Boton2 green largo>
                AVERIGUA
              </Boton2>
            </Link>
          </DivBttnes>
        </DivMio>
      </ContainerI>
    </>
  );
};

export default AboutUs;
