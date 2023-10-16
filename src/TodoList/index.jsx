import React, { useState } from "react";
import TodoItems from "./components/TodoItem";
import moment from "moment";

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
    <div>
      <div className="header">
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChangeText}
            placeholder="Enter Task"
            required="True"
          ></input>
          <br />
          <div id="timeLabel">Completion Time:</div>
          <input
            id="timeSelector"
            onChange={handleChangeDate}
            required="True"
            type="datetime-local"
          ></input>
          <br />
          <button type="submit">add</button>
        </form>
      </div>
      <TodoItems entries={items} delete={deleteItem} />
    </div>
  );
}

export default TodoList;
