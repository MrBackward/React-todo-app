import React from "react";
import TodoItems from "./components/TodoItems";
import TodoForm from "./components/TodoForm";
import { TodoListWrapper, Row } from "./styled";
import { useForm } from "./hooks/useForm";
import { useTaskItems } from "./hooks/useTaskItems";
import { getCurrentTimePlus1Hour } from "./logic";

function TodoList() {
  const [form, setFieldValue, resetForm] = useForm({
    title: "",
    description: "",
    completionTime: getCurrentTimePlus1Hour(),
  });

  const [items, addItem, deleteItem] = useTaskItems(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(form.title);
    resetForm();
  };

  return (
    <TodoListWrapper>
      <h1>Todo App</h1>
      <h2>Enter your task and completion time</h2>
      <Row>
        <div>
          <TodoForm
            form={form}
            setFieldValue={setFieldValue}
            handleSubmit={handleSubmit}
          />
        </div>
        <TodoItems items={items} deleteItem={deleteItem} />
      </Row>
    </TodoListWrapper>
  );
}

export default TodoList;
