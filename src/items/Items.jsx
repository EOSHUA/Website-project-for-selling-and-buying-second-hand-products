import React from "react";
import Search from "../search/Search";
import ItemList from "../itemList/ItemList";

export default function Items() {
  return (
    <div>
      Items
      <Search />
      <ItemList />
    </div>
  );
}
