import React from "react";
import SubCategories from "../subCategories/SubCategories";
import Categories from "../categories/Categories";
import ItemInfo from "../itemInfo/ItemInfo";
import { useState,createContext } from "react";
import Items from "../items/Items";
import './content.css'

export const ItemsContext = React.createContext();

export default function Content() {
  const [Itemss, setItems] = useState({});

  return (
    <div className="content">
      <ItemsContext.Provider value={{ Itemss, setItems }}>
      <Categories />
      <Items/>
      <SubCategories />
      <ItemInfo />
      
      </ItemsContext.Provider>
    </div>
  );
}
