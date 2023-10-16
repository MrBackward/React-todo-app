import React from "react";
import moment from "moment";
import { ListItem } from "./styled";

function TodoItem({
  item,
  deleteItem,
  currentTime,
  dragStart,
  prepareDrop,
  dragEnd,
}) {
  return (
    <ListItem
      draggable={true}
      onDragOver={(e) => prepareDrop(e)}
      onDragStart={(e) => dragStart(e)}
      onDrop={(e) => dragEnd(e)}
      onDragEnd={(e) => e.preventDefault()}
      onClick={() => deleteItem(item.key)}
      value={item.position}
      key={item.key}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="timeCountdown">
        <small>Due: {moment().to(item.completionTime)}</small>
      </p>
    </ListItem>
  );
}

export default TodoItem;
