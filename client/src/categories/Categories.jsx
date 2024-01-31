import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "./categories.css";
import SubCategories from "../subCategories/SubCategories";
import {  useNavigate } from "react-router-dom";
import { BrowserRouter ,Routes,Route, Link} from "react-router-dom";
import {ItemsContext} from '../content/Content'




export default function Categories(props) {
  const [currentItems, setCurrentItems] = useState([]);

 const navigate = useNavigate();

  useEffect(() => {
    try {
      axios.get(`http://localhost:4545/`).then((response) =>  {setCurrentItems(response.data )
           console.log(response.data);
          });
    } catch (e) {
      console.log(e);
    }
  }, []);  

  const getToSub=(e)=>{
    navigate(`subcategories/${e.category}/${e._id}`);
  }

  return (
    <>
     
      <div className="ContainerCategories">
        <h2>What would you like to buy? </h2>
        <div className="categories">
         {
 currentItems.map((e) => (
    <div key={e._id} onClick={() => getToSub(e)}>
      <img className="imgCategory" src={e.image} alt={e.category} />
      <div className="categoryName">{e.category}</div>
    </div>
  ))
}

        </div>

      </div>
    </>
  );
}
