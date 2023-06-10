import React from "react";
import { FormTasaciones } from "./FormTasaciones";
import logo2 from "../../components/Images/logo2.png";
import { TitleI } from "./Title";
import styled from "styled-components";

export const OuserBack = styled.section`
  min-height: 60vh;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
  .ourserv-box {
    width: 50%;
    background-color: #262626;
  }

  .ourserv-cont {
    color: #fff;
    padding: 1rem 3rem;
    height: 100%;
  }
  .contForm {
    width: 30vw;
  }
  @media only screen and (max-width: 849px) {
    .contForm {
      width: 100%;
    }
  }
  @media only screen and (max-width: 600px) {
    .ourserv-box {
      width: 100%;
    }
  }
`;
export const OurserLogo = styled.div`
  background-color: ${(props) =>
    props.green ? "#1F5436 !important" : "#dbab1e !important"};
  display: flex;
  justify-content: center;
  align-items: center;
  .img-logo {
    width: 33vw;
  }
  @media only screen and (max-width: 600px) {
    height: 50vh;
  }
`;

const OurServices = () => {
  return (
    <OuserBack>
      <OurserLogo className="ourserv-box">
        <img src={logo2} alt="logo" className="img-logo" />
      </OurserLogo>
      <div className="ourserv-box ourserv-cont">
        <TitleI corto style={{ marginBottom: "3rem" }}>
          TASACIONES
        </TitleI>
        <p>
          Somos una inmobiliaria especializada en tasaciones precisas y
          confiables. Nuestro equipo de expertos garantiza un servicio de
          calidad y excelencia para conocer el valor real de su propiedad.
        </p>
        <br />
        <section className="contForm">
          <FormTasaciones />
        </section>
      </div>
    </OuserBack>
  );
};

export default OurServices;
