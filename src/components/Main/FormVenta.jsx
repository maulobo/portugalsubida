import React from "react";
import Form from "react-bootstrap/Form";
import { Botton2 } from "./RenderCard1";

import "./style.css";
import { motion } from "framer-motion";
import { AlertaError, FormMio } from "./Form";
import { useForm } from "./useForm";
import { AlertMnsj } from "./AlertMnsj";
import { FormContainer } from "./FormAlquiler";

const initialForm = {
  tipoOperacion: "Compra",
  nombre: "",
  email: "",
  phoneNumber: "",
  zona: "",
  tipo: "",
  comments: "",
};

//COMPRA//
const FormVenta = () => {
  const validationsForm = (form) => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
      regexPhone = /[0-9]+/;

    let errors = {};
    if (!form.nombre.trim()) {
      errors.nombre = `Debe ingresar su nombre y apellido.`;
    }
    if (!form.email.trim()) {
      errors.email = `Debe ingresar su correo.`;
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `Debe ingresar correctamente los datos.`;
    }
    if (!form.phoneNumber) {
      errors.phoneNumber =
        "Debe ingresar su número telefónico. Ej: 351-123456789";
    } else if (!regexPhone.test(form.phoneNumber.trim())) {
      errors.phoneNumber =
        "Bebe ingresar correctamente los datos Ej: 351-123456789.";
    }
    if (!form.zona) {
      errors.zona = "Debe ingresar una zona de interés.";
    }
    if (!form.tipo) {
      errors.tipo = "Debe ingresar el tipo de inmueble.";
    }
    if (!form.comments.trim()) {
      errors.comments = "Debe ingresar su consulta.";
    }
    return errors;
  };

  const { handleBlur, handleSubmit, handleChange, form, error, response } =
    useForm(initialForm, validationsForm);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <FormContainer>
        <FormMio method="POST" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="tipoOperacion"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.tipoOperacion}
            style={{ display: "none" }}
          />
          <h4 className="ajust2">Quiero Comprar</h4>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              autoComplete="off"
              name="nombre"
              placeholder="Nombre"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.nombre}
              required
            />
            <Form.Text className="text-muted">
              {error.nombre && <AlertaError>{error.nombre}</AlertaError>}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="email"
              autoComplete="off"
              name="email"
              placeholder="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
            <Form.Text className="text-muted">
              {error.email && <AlertaError>{error.email}</AlertaError>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="tel"
              autoComplete="off"
              placeholder="Número telefónico"
              name="phoneNumber"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.phoneNumber}
              required
            />
            <Form.Text className="text-muted">
              {error.phoneNumber && (
                <AlertaError>{error.phoneNumber}</AlertaError>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              autoComplete="off"
              name="zona"
              placeholder="Zona de interes"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.zona}
              required
            />
            <Form.Text className="text-muted">
              {error.zona && <AlertaError>{error.zona}</AlertaError>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              autoComplete="off"
              name="tipo"
              placeholder="Tipo de propiedad"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.tipo}
              required
            />
            <Form.Text className="text-muted">
              {error.tipo && <AlertaError>{error.tipo}</AlertaError>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={4}
              name="comments"
              style={{ resize: "none" }}
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}
              required
              placeholder="Estoy interesado en esta propiedad"
            />
            <Form.Text className="text-muted">
              {error.comments && <AlertaError>{error.comments}</AlertaError>}
            </Form.Text>
          </Form.Group>
          <Botton2 verde margen verdeM type="submit">
            ENVIAR
          </Botton2>
        </FormMio>
        {response && <AlertMnsj />}
      </FormContainer>
    </motion.div>
  );
};

export default FormVenta;
