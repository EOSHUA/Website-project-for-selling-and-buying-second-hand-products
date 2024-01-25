import React from "react";
import Item from "../item/Item";
import axios from "axios";
import './itemList.css'

export default function ItemList({ Items }) {

  
  return (
    <div className="itemList">
      {Object.values(Items).map((item) => {
        <Item item={item} key={item.id} />;
      })}
    </div>
  );
}
