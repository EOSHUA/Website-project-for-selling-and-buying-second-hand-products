import React from "react";
import Item from "../item/Item";
import axios from "axios";

export default function ItemList({ Items }) {

  
  return (
    <div>
      {Object.values(Items).map((item) => {
        <Item item={item} key={item.id} />;
      })}
    </div>
  );
}
