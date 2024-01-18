import React from "react";
import Items from "../items/Items";
import SubCategories from "../subCategories/SubCategories";
import Categories from "../categories/Categories";
import ItemInfo from "../itemInfo/ItemInfo";
import { useState, createContext } from "react";

export const ItemsContext = React.createContext();

export default function Content() {
  const [Items, setItems] = useState({});

  return (
    <div>
      <ItemsContext.Provider value={{ Items, setItems }}>
        <Items />
        <SubCategories />
      </ItemsContext.Provider>

      <ItemInfo />
      <Categories />
    </div>
  );
}
