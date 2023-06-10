import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";



const ContactosDiv = ({children}) => {
  
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delayChildren: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };
  const listVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };
  
  const Section2 = ({ children }) => {
    const ref1 = useRef(null);
    const isInView = useInView(ref1);

    return (
      <>
        <div ref={ref1} className="ajustar" >
          <motion.div
            className="ajustar"
            variants={boxVariant}
            animate={isInView ? "visible" : "hidden"}
          >
            {children}
          </motion.div>
        </div>
      </>
    );
  };

  return (
    <>
      <Section2 >
        {children.map((el, index) => {
          return (
            <motion.a
              href={el.href}
              variants={listVariant}
              className="contactoIcons"
              key={index}
              target="_blank"
            >
              <el.Ico className="icoRed" />
              <h6 style={{ color: "#dbab1e", padding: "2rem 1rem 1rem 1rem" }}>
                {el.h6}
              </h6>
            </motion.a>
          );
        })}
      </Section2>
    </>
  );
};

export default ContactosDiv;