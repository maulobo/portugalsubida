import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertMnsj = () => {
  return (
    <>
      <Alert variant="success" style={{ marginTop: "1rem" }}>
        <Alert.Heading>Mensaje enviado correctamente</Alert.Heading>
        <p>
          En breve un agente se contactará con usted, recuerde revisar su
          casilla de mail inbox o spam.
        </p>
      </Alert>
    </>
  );
};

export { AlertMnsj };
