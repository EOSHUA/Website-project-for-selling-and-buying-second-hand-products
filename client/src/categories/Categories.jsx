import axios from "axios";
import React, { useEffect, useState } from "react";
import "./categories.css";
import SubCategories from "../subCategories/SubCategories";
import {  useNavigate } from "react-router-dom";
import { BrowserRouter ,Routes,Route, Link} from "react-router-dom";

export default function Categories() {
  const [menu, setMenu] = useState({ data: [] });
 const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4545/`)
        .then((response) => setMenu({ data: response.data }));
    } catch (e) {
      console.log(e);
    }
  }, []);  

  const getToSub=(catName)=>{
    navigate(`subcategories/${catName}`);
  }

  return (
    <>
      <div className="ContainerCategories">
        <h2>What would you like to buy? </h2>
        <div className="categories">
          {menu.data &&
            menu.data.map((e) =>(
              <div key={e._id} onClick={() => getToSub(e.category)}>
                {<img className="imgCategory" src={e.image} ></img>}
                <div className="categoryName"  >{e.category}</div>
              </div>
              
            ))}
        </div>

      </div>
    </>
  );
}
