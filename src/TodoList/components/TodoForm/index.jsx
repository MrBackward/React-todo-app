import React from "react";

const TodoForm = ({handleSubmit, handleChangeText, handleChangeDate}) => {
    return (
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
    )
}

export default TodoForm;