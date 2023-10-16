import React from "react";
import { FormField } from "./components/FormField";
import { Form, Button } from "./styled";

const TodoForm = ({ form, setFieldValue, handleSubmit }) => {
  return (
    <Form id="form" onSubmit={handleSubmit}>
      <FormField
        onChange={(e) => setFieldValue("title", e.target.value)}
        value={form.title}
        label={"Task title"}
        type="text"
      />
      <FormField
        onChange={(e) => setFieldValue("description", e.target.value)}
        value={form.description}
        type="textarea"
        label="Task description"
        rows="5"
      />
      <FormField
        onChange={(e) => setFieldValue("completionTime", e.target.value)}
        value={form.completionTime}
        label={"Completion Time"}
        type="datetime-local"
      />
      <Button type="submit">add</Button>
    </Form>
  );
};

export default TodoForm;
