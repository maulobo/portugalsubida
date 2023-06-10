import styled from "styled-components";
import VideoBanner from "../Images/video/bannerVideo.webm";
import ima1 from "../Images/fondo.webp";

export const HeroPages = styled.header`
  position: relative;
  min-height: 100vh;
  .videoB {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .capa {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #262626;
    opacity: 0.7;
  }
  .items {
    padding-top: 35vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    z-index: 2;
  }
  .h1Sale {
    font-size: 5vw;
    letter-spacing: 8px;
  }
  @media only screen and (max-width: 1199px) {
    min-height: 70vh;
    .items {
      padding-top: 25vh;
    }
  }

  @media only screen and (max-width: 700px) {
    min-height: 50vh;
    .h1Sale {
      font-size: 1.5em;
      text-align: center;
      margin: 0 1rem 0 1rem;
    }
    .items {
      padding-top: 0;
      min-height: 50vh;
      background-image: url(${ima1});
      background-size: cover;
      background-repeat: no-repeat;
    }
    .videoB {
      display: none;
    }
  }
`;

const HeroPagess = () => {
  return (
    <>
      <HeroPages>
        <section className="items">
          <h1 className="h1Sale">PROPIEDADES EN VENTA</h1>
          <div className="p-stateCont">
            <p className="p-state">
              Nos enfocamos en entender las necesidades y objetivos de cada
              cliente individualmente para poder ofrecer soluciones adaptadas a
              sus necesidades.
            </p>
          </div>
        </section>
        <video autoPlay loop src={VideoBanner} className="videoB"></video>
        <section className="capa"></section>
      </HeroPages>
    </>
  );
};

export { HeroPagess };
