import descubre from "../Images/descubre.webp";
import { FaRegBuilding } from "react-icons/fa";
import { BiStore } from "react-icons/bi";
import { TbBuilding } from "react-icons/tb";
import { BsHouse } from "react-icons/bs";
import { MdCropLandscape } from "react-icons/md";
import "./style.css";
import { TitleI } from "./Title";
import { ContainerI } from "../ContainerI";
import { DivMio } from "../DivMio";
import { motion, useAnimation } from "framer-motion";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CardBody = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delayChildren: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };
  const listVariant = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView]);

  const array = [
    {
      Ico: FaRegBuilding,
      p: "Departamentos",
    },
    {
      Ico: BsHouse,
      p: "Casas",
    },
    {
      Ico: MdCropLandscape,
      p: "Terrenos",
    },
    {
      Ico: BiStore,
      p: "Locales",
    },
    {
      Ico: TbBuilding,
      p: "Oficinas",
    },
  ];

  return (
    <>
      <ContainerI ref={ref}>
        <motion.div variants={boxVariant} animate={animation} initial="hidden">
          <DivMio icons>
            <TitleI green>DESCUBRE</TitleI>
            {array.map((el, index) => {
              return (
                <motion.div key={index} variants={listVariant}>
                  <div className="card_iconS">
                    <p> {el.p} </p>
                    <el.Ico className="card_icono" />
                  </div>
                </motion.div>
              );
            })}
          </DivMio>
        </motion.div>
        <DivMio>
          <img src={descubre} alt="edificio" className="fotito" />
        </DivMio>
      </ContainerI>
    </>
  );
};

export { CardBody };
