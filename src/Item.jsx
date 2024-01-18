import React from 'react'
import { useNavigate } from "react-router-dom";



export default function Item({item}) {

  const navigate = useNavigate();





  const navToItemInfo=(e)=>{
    navigate("")
  }



  return (
    <>
      <div className='item' onClick={navToItemInfo}>
          <img src={item.img}
           width="100%"></img>
          <h2>{item.detail}</h2>
          <h2>{item.location}</h2>
          <h2>{item.updateDate}</h2>
      </div>
    </>
  )
}
