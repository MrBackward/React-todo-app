import moment from "moment";

export const filterOutItemByKey = (key, items) => {
  return items.filter((item) => item.key !== key);
};

export const getCurrentTimePlus1Hour = () => {
  return moment().add(1, "hours").format("YYYY-MM-DDTHH:mm:ss");
};
