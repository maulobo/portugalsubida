import styled from "styled-components";

export const ContainerI = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem 10%;
  justify-content: center;
  align-items: center;
  color: var(--color-p);
  padding: 3rem 2rem;
  @media only screen and (max-width: 400px) {
    margin: 1rem 0;
    padding: 2rem 2rem;
  }
`;
