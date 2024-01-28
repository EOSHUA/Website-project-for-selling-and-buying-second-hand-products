import axios from "axios";
import React, { useEffect, useState } from "react";
import './categories.css';

export default function Categories() {
  const [menu, setMenu] = useState({});
  // useEffect(() => {
  //   try {
  //     axios.get(`http://localhost:5173/categories`).then(() => setMenu(menu));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);

  return (
  <>
   
    <div className="ContainerCategories">
      <h2>What would you like to buy?  </h2>
        <div className="categories">
          <div className="categoriesItem"></div>
          <div className="categoriesItem"></div>
          <div className="categoriesItem"></div>
          <div className="categoriesItem"></div>
          <div className="categoriesItem"></div>
          
          {Object.values(menu).map((categoriesItem, e) => {
            <div id="categoriesItem">
              {categoriesItem}
            </div>;
          })}
        </div>
    </div>
  </>
  );
}
