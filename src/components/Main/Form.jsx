import React from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import "./style.css";
import { useForm } from "./useForm";
import { AlertMnsj } from "./AlertMnsj";
import { ServicesC } from "./Modal";
import { Botton2 } from "./RenderCard1";

export const FormMio = styled.form`
  width: 100%;
  position: relative;
  .form-control:focus {
    box-shadow: inset 0 0 0 #dbab1e, 5px 5px 10px -5px #dbab1e;
    border: 1px solid #dbab1e;
  }
`;
export const AlertaError = styled.p`
  padding-top: 0.5rem;
  color: #dbab1e;
`;
const initialForm = {
  tipoOperacion: "Consultas generales",
  nombre: "",
  email: "",
  phoneNumber: "",
  comments: "",
};

const Formulario = () => {
  const validationsForm = (form) => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
      regexPhone = /[0-9]+/;

    //cada imput es independiente si o si
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
    if (!form.comments.trim()) {
      errors.comments = `Debe ingresar su consulta.`;
    }
    return errors;
  };

  const { handleBlur, handleSubmit, handleChange, form, error, response } =
    useForm(initialForm, validationsForm);

  return (
    <>
      <FormMio method="POST" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="tipoOperacion"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.tipoOperacion}
          style={{ display: "none" }}
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={4}
            name="comments"
            style={{ resize: "none" }}
            placeholder="Ingrese su consulta"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          />
          <Form.Text className="text-muted">
            {error.comments && <AlertaError>{error.comments}</AlertaError>}
          </Form.Text>
        </Form.Group>
        <ServicesC>
          <Botton2 type="submit">ENVIAR</Botton2>
        </ServicesC>
      </FormMio>
      {response && <AlertMnsj />}
    </>
  );
};

export { Formulario };
