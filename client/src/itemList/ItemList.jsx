import React from "react";
import Item from "../item/Item";
import {useEffect, useState} from "react";
import axios from "axios";
import './itemList.css'
import { useParams } from "react-router-dom";

export default function ItemList({ Items }) {
  const [items, setItems] = useState({ data: [] });
  // const params=useParams()
  
  const urlCat=window.location.href.split('/')[6]
  const urlSub=window.location.href.split('/')[6]
  
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4545/items/`)
        .then((response) => setItems({ data: response.data }));
    } catch (e) {
      console.log(e);
    }
  }, []);

  
  return (
    <>
    <div className="itemList"> 
       {items.data && items.data.map((item) =>(
          <div key={item.image} >
          <Item items={item} key={item.id} />
     </div>        
       ))}
    </div>
    
    </>

    
  );
}
