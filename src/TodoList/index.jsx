import React, { useState } from "react";
import TodoItems from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import moment from "moment";
import { TodoListWrapper } from "./styled";

function TodoList() {
  const [userInput, setUserInput] = useState("");
  const [userDate, setUserDate] = useState();
  const handleChangeText = (event) => {
    setUserInput(event.target.value);
  };

  const handleChangeDate = (event) => {
    setUserDate(event.target.value);
  };

  const [items, setItems] = useState([]);
  const addItem = (item) => {
    if (item !== "") {
      var input = {
        text: item,
        completionTime: moment(userDate).toISOString(),
        key: Date.now(),
        position: items.length,
      };

      setItems([...items, input]);
    }
  };

  const handleSubmit = (e) => {
    setUserInput("");
    addItem(userInput);
    document.getElementById("form").reset();
    e.preventDefault();
  };

  const deleteItem = (key) => {
    var filteredItems = items.filter((d) => d.key !== key);

    setItems(filteredItems);
  };

  return (
    <TodoListWrapper>
      <h1>Todo App</h1>
      <TodoForm
        handleChangeText={handleChangeText}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
      />
      <TodoItems entries={items} delete={deleteItem} />
    </TodoListWrapper>
  );
}

export default TodoList;
