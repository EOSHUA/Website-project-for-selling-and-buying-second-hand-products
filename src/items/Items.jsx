import React, { useState, useContext } from "react";
import Search from "../search/Search";
import ItemList from "../itemList/ItemList";

export default function Items({ category, subCategory }) {
  const { Items, setItems } = useContext(ItemsContext);


  const DisplayItemOnTheScreen = ()=> {
    if (Items==null) {
        useEffect(() => {
          const data = axios
            .get("http://localhost:5173/getAll")
            .then((res) => setItems(res));
        }, []);
    }
    else {
      
    }

  }  



  return (
    <div>
      <Search />
      <ItemList Items={Items} />
    </div>
  );
}
