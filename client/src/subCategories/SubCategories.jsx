import React, { useContext } from "react";
import axios from "axios";
import { ItemsContext } from "../content/Content";

export default function SubCategories({cat}) {
 
  const { Itemss, setItems } = useContext(ItemsContext);

  const getByCategory = async () => {

    const {data} = await axios.get(`http://localhost:4545/subCategory/${cat}`,
      {parentId:"65b64252f4874f7f2148075a"}).then((res) => console.log(res));
      
      
  };

  return(
  <div>
    <p>hhhhhhhh</p>
    { console.log("cat")}
    {getByCategory()}
    
    
    </div>
    )
}
