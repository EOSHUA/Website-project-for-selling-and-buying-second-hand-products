import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



export default function Item({items}) {

  const navigate = useNavigate();
  
  const navToItemInfo=(e)=>{
    navigate("")
  }



  return (
    <>
   
      {<img className="imgCategory" src={items.image}></img>}
      <div className="categoryName">{items.category}</div>
   
   
    
     
              
           
   
      {/* <div className='item' onClick={navToItemInfo}>
          <img src={item.img} width="100%"></img>
          <h2>{item.detail}</h2>
          <h2>{item.location}</h2>
          <h2>{item.updateDate}</h2>
      </div> */}
    </>
  )
}
