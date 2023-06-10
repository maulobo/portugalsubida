import React from "react";
import { TitleI } from "./Title";

const Maps = () => {
  return (
    <div className="maps">
      <TitleI normal corto>ENCONTRANOS EN</TitleI>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13619.738489487409!2d-64.1974338!3d-31.4159273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3251fc63cbf%3A0xe2d7b2e1e100760d!2sPortugal%20Inmobiliaria!5e0!3m2!1ses-419!2sar!4v1676571044551!5m2!1ses-419!2sar"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className="maps"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
