import React, { useContext } from "react";
import axios from "axios";

export default function SubCategories() {
  const { Items, setItems } = useContext(ItemsContext);

  const getByCategory = (category, subCategory) => {
    const data = axios
      .get(`http://localhost:5173/${category}/${subCategory}`)
      .then((res) => setItems(res));
  };

  return;
  <div>{() => getByCategory()}</div>;
}
