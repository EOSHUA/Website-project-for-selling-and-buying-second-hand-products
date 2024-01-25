import React, { useState, useContext , useEffect} from "react";
import Search from "../search/Search";
import ItemList from "../itemList/ItemList";
import {ItemsContext} from '../content/Content'
import axios from "axios";
import './items.css'

export default function Items({ category, subCategory }) {
  const { Itemss, setItems } = useContext(ItemsContext);

  const DisplayItemOnTheScreen = () => {
    // if (Items == null) {
      // useEffect(() => {
      //   const data = axios
      //     .get("http://localhost:5173/getAll")
      //     .then((res) => setItems(res));
      // }, []);
    // } else {
    // }
  };   

  return (
    <>
    <div className="items">
     
      
      <ItemList Items={Items} />
      <Search />
    </div>
    </>
  );
}
