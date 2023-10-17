import React from "react";
import { FormField } from "./components/FormField";
import { Form, Button } from "./styled";
import { getAiResponse } from "./service/getAiResponse";
import { BaseLoadingSpinner } from "./components/Spinner/styled";

const TodoForm = ({ form, setFieldValue, handleSubmit }) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Form id="form" onSubmit={handleSubmit}>
      <FormField
        onChange={(e) => setFieldValue("title", e.target.value)}
        value={form.title}
        label={"Task title"}
        type="text"
      />
      <Button
        disabled={form.title === ""}
        onClick={(e) => getAiResponse(form.title, setFieldValue, e, setLoading)}
      >
        Auto-generate description
      </Button>
      {loading && <BaseLoadingSpinner />}
      <FormField
        onChange={(e) => setFieldValue("description", e.target.value)}
        value={form.description}
        type="textarea"
        label="Task description"
        rows="10"
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
