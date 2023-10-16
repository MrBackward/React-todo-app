import React, { useState, useEffect } from "react";
import moment from "moment";
import { sortItems } from "./logic";
import { useForceReload } from "../../../utils/hooks/useForceReload";
import { ItemUnorderedList } from "./styled";
import TodoItem from "./components/TodoItem";

function TodoItems({ items, deleteItem }) {
  let todoItems = items;

  const [forceReload] = useForceReload();
  const [position1, setPosition1] = useState();
  const [position2, setPosition2] = useState();

  const [currentTime, setCurrentTime] = useState(moment().toISOString());

  const dragStart = (e) => {
    setPosition1(e.target.value);
  };

  const prepareDrop = (e) => {
    e.preventDefault();
    setPosition2(e.target.value);
  };

  const dragEnd = (e) => {
    e.preventDefault();
    sortItems(todoItems, position1, position2);
    forceReload();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ItemUnorderedList>
      {todoItems.map((item) => (
        <TodoItem
          key={item.key}
          item={item}
          deleteItem={deleteItem}
          currentTime={currentTime}
          dragStart={dragStart}
          prepareDrop={prepareDrop}
          dragEnd={dragEnd}
        />
      ))}
    </ItemUnorderedList>
  );
}

export default TodoItems;
