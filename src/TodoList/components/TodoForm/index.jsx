import React from "react";
import { FormField } from "./components/FormField";
import { Form, Button } from "./styled";

const TodoForm = ({ handleSubmit, handleChangeText, handleChangeDate }) => {
  return (
    <Form id="form" onSubmit={handleSubmit}>
      <FormField
        onChange={handleChangeText}
        value={""}
        label={"Task title"}
        type="text"
      />
      <FormField type="textarea" label="Task description" rows="5" />
      <FormField
        onChange={handleChangeDate}
        value={""}
        label={"Completion Time"}
        type="datetime-local"
      />
      <Button type="submit">add</Button>
    </Form>
  );
};

export default TodoForm;
