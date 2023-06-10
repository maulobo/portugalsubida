import React from "react";
import { ServicesC } from "./Modal";
import { AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import styled from "styled-components";

const ContactoCont = styled.div`
  text-align: center;
  color: #dbab1e;
  margin: 0 0 0 1rem;
  @media (max-width: 991px) {
    margin: 1rem;
  }
`;

const Contacto = () => {
  return (
    <>
      <ServicesC contacto>
        <ContactoCont>
          <h5>
            <AiOutlinePhone style={{ fontSize: "1.2em" }} />{" "}
          </h5>
          <p>351-7633299</p>
        </ContactoCont>
        <ContactoCont>
          <h5>
            <FiMail style={{ fontSize: "1.2em" }} />
          </h5>
          <p>inmobiliariaportugal@gmail.com</p>
        </ContactoCont>
      </ServicesC>
    </>
  );
};

export { Contacto };
