import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";
import { App } from "./styled";

const destination = document.querySelector("#container");

ReactDOM.render(
  <App>
    <TodoList />
  </App>,
  destination
);
