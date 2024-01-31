import React from "react";
import Categories from "../categories/Categories";

import ItemInfo from "../itemInfo/ItemInfo";
import { useState, createContext } from "react";
import Items from "../items/Items";
import "./content.css";
import { Route, Routes } from "react-router-dom";
import SubCategories from "../subCategories/SubCategories";

export const ItemsContext = createContext({
  // currentItems: [],
  // setCurrentItems: () => [],
});

export default function Content() {
  const [currentItems, setCurrentItems] = useState([]);

  return (
    <div className="content">
      <Routes>
        <Route
          path="/subcategories/:catName/:id"
          element={
            <SubCategories
              currentItems={currentItems}
              setCurrentItems={setCurrentItems}
            />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Categories
              currentItems={currentItems}
              setCurrentItems={setCurrentItems}
            />
          }
        ></Route>
        {/* <ItemsContext.Provider value={{ setCurrentItems, currentItems }}> */}
        {/* <Categories currentItems={currentItems} setCurrentItems={setCurrentItems}/> */}
        {/* <SubCategories currentItems={currentItems} setCurrentItems={setCurrentItems}/> */}
      </Routes>
      <Items />
      <ItemInfo />
      

      {/* </ItemsContext.Provider> */}
    </div>
  );
}
