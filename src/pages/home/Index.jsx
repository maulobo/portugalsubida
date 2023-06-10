import { CardBody } from "../../components/Main/CardBody";
import { Footer } from "../../components/Main/Footer";
import { Hero } from "../../components/Main/Hero";
import AboutUs from "../../components/Main/AboutUs";
import ImagesGallery from "../../components/Main/ImagesGallery.jsx";
import "../../components/main/style.css";
import OurServices from "../../components/Main/OurServices";
import Maps from "../../components/Main/Maps";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TitleI } from "../../components/Main/Title";
import { FormContact } from "../../components/Main/FormContact";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ContactosDiv from "../../components/Main/ContactosDiv";
import { Icons } from "../../components/Main/MapIcons";

export const Contactos = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .contactoIcons {
    text-decoration: none;
    text-align: center;
    position: relative;
    overflow: hidden;
    color: #fff;
    cursor: pointer;
    margin: 1rem;
    height: 26vh;
    width: 25vh;
    border: 4px solid #dbab1e;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 0px 0px rgba(228, 193, 17, 0.684);
    transition: 500ms ease-in-out;
  }
  .contactoIcons:hover {
    box-shadow: 0px 0px 21px 0px rgba(228, 193, 17, 0.684);
    transform: scale(1.1);
  }
  .icoRed {
    font-size: 2em;
    color: #dbab1e;
  }
`;

const hidden = {
  opacity: 0,
};
const visible = {
  opacity: 1,
  transition: { delay: 0.7 },
};
const Home = () => {
  const Section = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
      <section ref={ref}>
        <span
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s",
          }}
        >
          {children}
        </span>
      </section>
    );
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Inmobiliaria Portugal</title>
          <meta
            name="author"
            content="Lobo Mauro Andrés, de Prado Valeria Anabel"
          />
          <meta
            name="description"
            content="Somos una inmobiliaria familiar que, manteniendo los valores de nuestros fundadores en el centro de nuestras operaciones, nos comprometemos a trabajar con transparencia y dedicación para ayudar a nuestros clientes a tomar decisiones informadas y acertadas."
          />
          <meta
            name="keywords"
            content="inmobiliaria Cordoba, gestion inmobiliaria Cordoba, venta de inmuebles cordoba capital, alquiler de inmuebles cordoba, servicio de tasaciones inmobiliarias"
          ></meta>
        </Helmet>
      </HelmetProvider>
      <main className="main_body">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Hero />
        </motion.div>
        <CardBody />
        <Section>
          <AboutUs />
        </Section>
        <div className="ajust">
          <ImagesGallery />
        </div>
        <Section>
          <OurServices />
        </Section>
        <Maps />
        <Section>
          <FormContact />
        </Section>
        <TitleI normal corto>
          OTROS CANALES DE CONTACTO
        </TitleI>
        <Contactos>
          <ContactosDiv>{Icons}</ContactosDiv>
        </Contactos>
        <div className="footer-ajust">
          <Footer />
        </div>
      </main>
    </>
  );
};

export { Home };
