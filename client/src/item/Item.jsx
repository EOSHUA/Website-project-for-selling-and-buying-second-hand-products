import React from 'react'
import './item.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function Item({items}) {

  const navigate = useNavigate();
  
  const navToItemInfo=(e)=>{
    navigate("iteminfo")
  }



  return (
    <>
    <div className='item' onClick={navToItemInfo}>
        <img className="itemImgCategory" src={items.image}></img>
        <div className="itemCategoryName">{items.category}</div>
    </div>
    </>
  )
}
