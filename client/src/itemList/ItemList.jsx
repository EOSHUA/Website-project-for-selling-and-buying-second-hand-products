import React from "react";
import Item from "../item/Item";
import {useEffect, useState} from "react";
import axios from "axios";
import './itemList.css'

export default function ItemList({ Items }) {

  const [items, setItems] = useState({ data: [] });

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4545/`)
        .then((response) => setItems({ data: response.data }));
    } catch (e) {
      console.log(e);
    }
  }, []);

  
  return (
    <div className="itemList">
      {/* {Object.values(Items).map((item) => {
        <Item item={item} key={item.id} />;
      })} */}



    {items.data && items.data.map((item) =>(
                  <div key={item.image} >
                      <Item items={item} key={item.id} />
                   
                  </div>
                  
                ))}
    </div>

    
  );
}
