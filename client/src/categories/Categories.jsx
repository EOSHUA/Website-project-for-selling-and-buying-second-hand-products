import axios from "axios";
import React, { useEffect, useState } from "react";
import "./categories.css";

export default function Categories() {
  const [menu, setMenu] = useState({ data: [] });

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4545/`)
        .then((response) => setMenu({ data: response.data }));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="ContainerCategories">
        <h2>What would you like to buy? </h2>
        <div className="categories">
          {menu.data &&
            menu.data.map((e) =>(
              <div key={e.image} >
                {<img className="imgCategory" src={e.image}></img>}
                <div className="categoryName">{e.category}</div>
              </div>
              
            ))}
        </div>
      </div>
    </>
  );
}
