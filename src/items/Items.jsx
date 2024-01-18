import React, { useState, useContext } from "react";
import Search from "../search/Search";
import ItemList from "../itemList/ItemList";

export default function Items({ category, subCategory }) {
  const { Items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    const data = axios
      .get("http://localhost:5173/getAll")
      .then((res) => setItems(res));
  }, []);

  return (
    <div>
      <Search />
      <ItemList Items={Items} />
    </div>
  );
}
