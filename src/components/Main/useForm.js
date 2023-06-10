import { useState } from "react";
import emailjs from "@emailjs/browser";

export function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  //La validacion de errores puede ser en el blur o el submit
  //como se prefiera
  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));

    if (Object.keys(error).length === 0) {
      setResponse(true);
      console.log(form);
      setForm(initialForm);

      setTimeout(() => setResponse(false), 10000);

      emailjs
        .sendForm(
          "service_pb5o6y5",
          "template_6z9215o",
          e.target,
          "8aMt3MOkQv6l1sUeJ"
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } else {
      return;
    }
  };

  return {
    form,
    error,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
  };
}
