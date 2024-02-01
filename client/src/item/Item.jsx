import React from 'react'
import './item.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function Item({items}) {

  const navigate = useNavigate();
  
  const navToItemInfo=(e)=>{
    navigate("")
  }



  return (
    <>
    <div className='item'>
        <img className="itemImgCategory" src={items.image}></img>
        <div className="itemCategoryName">{items.category}</div>
    </div>
    </>
  )
}
