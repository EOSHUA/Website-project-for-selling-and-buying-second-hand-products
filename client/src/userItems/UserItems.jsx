import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";




export default function UserItems() {
  const [myItems, setMyItems]=useState({})
  

useEffect(() => {
  try {
     axios.get(`http://localhost:4545/items/getMyAds`).then((response) =>  {console.log(response )
    });
  } catch (e) {
    console.log(e);
  }
}, []);  
  return (
  <div>

    <h1>my ads</h1>
  </div>)
}
