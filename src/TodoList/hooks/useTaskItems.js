import moment from "moment";
import { useState } from "react";
import { filterOutItemByKey } from "../logic";

export const useTaskItems = (form) => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    var input = {
      title: form.title,
      description: form.description,
      completionTime: moment(form.completionTime).toISOString(),
      key: Date.now(),
      position: items.length,
    };

    setItems([...items, input]);
  };

  const deleteItem = (key) => {
    const filteredItems = filterOutItemByKey(key, items);
    setItems(filteredItems);
  };

  return [items, addItem, deleteItem];
};
