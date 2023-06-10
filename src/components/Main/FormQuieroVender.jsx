import React from "react";
import Form from "react-bootstrap/Form";
import { Botton2 } from "./RenderCard1";
import { FormContainer } from "./FormAlquiler";
import { FormMio } from "./FormAlquiler";
import { motion } from "framer-motion";
import { useForm } from "./useForm";
import { AlertaError } from "./Form";
import { AlertMnsj } from "./AlertMnsj";

const initialForm = {
  tipoOperacion: "Venta",
  tipoInmueble: "",
  ubicacion: "",
  superficie: "",
  antiguedad: "",
  nombre: "",
  phoneNumber: "",
  email: "",
  comments: "",
};
//VENTA//
const FormQuieroVender = () => {
  const validationsForm = (form) => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
      regexPhone = /[0-9]+/;

    let errors = {};
    if (!form.tipoInmueble.trim()) {
      errors.tipoInmueble = `Debe ingresar su nombre y apellido.`;
    }
    if (!form.ubicacion.trim()) {
      errors.ubicacion = `Debe ingresar correctamente la ubicación.`;
    }
    if (!form.superficie.trim()) {
      errors.superficie = `Debe ingresar una superficie aproximada`;
    }
    if (!form.antiguedad.trim()) {
      errors.antiguedad = "Debe ingresar una antiguedad.";
    }
    if (!form.nombre.trim()) {
      errors.nombre = "Debe ingresar su nombre y apellido.";
    }
    if (!form.phoneNumber.trim()) {
      errors.phoneNumber =
        "Debe ingresar su número telefónico. Ej: 351-123456789";
    } else if (!regexPhone.test(form.phoneNumber.trim())) {
      errors.phoneNumber =
        "Bebe ingresar correctamente los datos Ej: 351-123456789.";
    }
    if (!form.email.trim()) {
      errors.email = `Debe ingresar su correo.`;
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `Debe ingresar correctamente los datos.`;
    }
    return errors;
  };

  const { handleBlur, handleSubmit, handleChange, form, error, response } =
    useForm(initialForm, validationsForm);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
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
          <h4 className="ajust2">Quiero Vender</h4>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="tipoInmueble"
              handleBlur={handleBlur}
              onChange={handleChange}
              placeholder="Tipo de propiedad"
              value={form.tipoInmueble}
              required
            />
            <Form.Text className="text-muted">
              {error.tipoInmueble && (
                <AlertaError>{error.tipoInmueble}</AlertaError>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="ubicacion"
              placeholder="Ubicación"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.ubicacion}
              required
            />
            <Form.Text className="text-muted">
              {error.ubicacion && <AlertaError>{error.ubicacion}</AlertaError>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Superficie"
              name="superficie"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.superficie}
              required
            />
            <Form.Text className="text-muted">
              {error.superficie && (
                <AlertaError>{error.superficie}</AlertaError>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="antiguedad"
              placeholder="Antiguedad"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.antiguedad}
              required
            />
            <Form.Text className="text-muted">
              {error.antiguedad && (
                <AlertaError>{error.antiguedad}</AlertaError>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="nombre"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.nombre}
              placeholder="Apellido y Nombre"
              required
            />
            <Form.Text className="text-muted">
              {error.nombre && <AlertaError>{error.nombre}</AlertaError>}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="tel"
              name="phoneNumber"
              placeholder="Número telefónico Ej: 351-123456789"
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={4}
              name="comments"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.comments}
              style={{ resize: "none" }}
              placeholder="Características generales del inmueble."
            />
          </Form.Group>
          <Botton2 margen type="submit">
            ENVIAR
          </Botton2>
        </FormMio>
        {response && <AlertMnsj />}
      </FormContainer>
    </motion.div>
  );
};

export { FormQuieroVender };
