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
  

  return (
    <div className="content">
      <Routes>
            <Route
              path="/subcategories/:catName/:id"
              element={
                <SubCategories
                  
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <Categories
                
                />
              }
            ></Route>
          
      </Routes>
      <Items />
      
      

      {/* </ItemsContext.Provider> */}
    </div>
  );
}
