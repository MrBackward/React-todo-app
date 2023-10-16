import React from "react";
import { Input, FormFieldWrapper, Textarea } from "./styled";

export const FormField = ({
  value,
  onChange,
  label,
  type = "text",
  ...restProps
}) => {
  return (
    <FormFieldWrapper>
      <label>{label}</label>
      {type === "textarea" ? (
        <Textarea
          isTextarea
          required
          value={value}
          onChange={onChange}
          type={type}
          {...restProps}
        />
      ) : (
        <Input
          required
          value={value}
          onChange={onChange}
          type={type}
          {...restProps}
        />
      )}
    </FormFieldWrapper>
  );
};
