import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {ItemsContext} from '../content/Content'



export default function SubCategories(props) {

//  const {currentItems,setCurrentItems}=useContext(ItemsContext)
const params=useParams()

 useEffect(()=>{
  try {
    const data =  axios.post(`http://localhost:4545/subCategory/${params.cat}`,
    {parentId:params.id}).then(res => props.setCurrentItems(res.data))
  } catch (error) {
    console.log(error);
  }
 },[])



  return(
  <div>
    <h1>hello sub categories</h1>
    </div>
    )
}
