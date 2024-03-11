import React, { useContext, useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {ItemsContext} from '../content/Content'



export default function SubCategories(props) {

const [currentItems, setCurrentItems] = useState([]);
const params=useParams()

 useEffect(()=>{
  try {
    const data =  axios.post(`http://localhost:4545/guest/subCategory/${params.cat}`,
    {parentId:params.id}).then(res => setCurrentItems(res.data))
  } catch (error) {
    console.log(error);
  }
 },[])
const showItems =() => {
 
  // navigate(`items`);
}


  return(
    <>
     
    <div className="ContainerCategories">
      <h2>What would you like to buy? </h2>
      <div className="categories">
       {
        currentItems.map((e) => (
          <div key={e._id} onClick={(e) => showItems(e)}>
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
