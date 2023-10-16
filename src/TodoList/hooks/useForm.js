import { useState } from "react";

export const useForm = (initialisedFields) => {
  const [form, setForm] = useState(initialisedFields);

  console.log(form);

  const setFieldValue = (field, value) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const resetForm = () => {
    setForm(initialisedFields);
  };

  return [form, setFieldValue, resetForm];
};
