import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  padding: 0.8rem 2rem;
  height: 7vh;
  letter-spacing: 2px;
  color: #fff;
  position: relative;
  margin: ${(props) => (props.margen ? "1rem 0" : "1rem")};
  border-radius: 3px;
  border: ${(props) =>
    props.green ? "4px solid #285437" : "4px solid #DBAB1E"};
  background: ${(props) => (props.green ? "#285437" : "#DBAB1E")};
  transition: 1s ease-in-out;
  &:hover {
    background: transparent;
    border: ${(props) =>
      props.green ? "4px solid #285437" : "4px solid #DBAB1E"};
  }
`;
const Btns = () => {
  return (
    <>
      <Button>CONÉCTATE</Button>
    </>
  );
};

export { Btns };
