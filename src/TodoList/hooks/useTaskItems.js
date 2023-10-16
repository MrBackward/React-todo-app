import moment from "moment";
import { useState } from "react";
import { filterOutItemByKey } from "../logic";

export const useTaskItems = (form) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (item !== "") {
      var input = {
        text: item,
        completionTime: moment(form.completionTime).toISOString(),
        key: Date.now(),
        position: items.length,
      };

      setItems([...items, input]);
    }
  };

  const deleteItem = (key) => {
    setItems(filterOutItemByKey(key));
  };

  return [items, addItem, deleteItem];
};
