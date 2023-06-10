import styled from "styled-components";

export const DivMio = styled.div`
  min-height:  70vh;
  width: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => {
    if (props.icons && props.icons2) {
      return "space-around";
    } else if (props.icons) {
      return "space-between";
    } else if (props.icons2) {
      return "space-around";
    } else if (props.icons3) {
      return "center";
    } else {
      return "flex-end";
    }
  }};
  @media (max-width: 1199px){
    min-height: 60vh;
    width: 35vh;
   }
   @media only screen and (max-width: 400px) {
    height: ${(props) => (props.auto ? "auto" : "55vh")};
    width: 30vh;
  }
`;
