import styled from "styled-components";

export const Boton2 = styled.button`
  padding: 0.8rem 2rem;
  height: 7vh;
  width: 8vh;
  letter-spacing: 2px;
  color: #fff;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  border: ${(props) =>
    props.green ? "4px solid #285437" : "4px solid #DBAB1E"};
  background-color: transparent;
  transition: 1s ease-in-out;
  &:hover {
    width: ${(prop) => (prop.largo ? "21vh" : "20vh")};
  }
  @media only screen and (max-width: 575px) {
    padding: 0.8rem 2rem;
    height: 100%;
    width: 100%;
  }
`;
