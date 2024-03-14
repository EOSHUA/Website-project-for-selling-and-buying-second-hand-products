import React from "react";
import LogIn from "../logIn/LogIn";
import SignIn from "../signIn/SignIn";
import { Routes, Route } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import './memberLayout.css'
import home from "./imeges/home.png"

export default function MemberLayout() {

  const navigate = useNavigate();

function nav(e) {
 navigate('/member/' + e.target.innerHTML);
}
const goToHome=()=>{
  navigate(`/guest/`)
}

  return (
    <div className="container">
     <div className="goBack" onClick={goToHome}>
     <img src={home} width={50} ></img>
     </div>
      <div className="form-wrap"> 
      <h1 className="header_">Welcome</h1>
        <div class="tabs">
          <h3 class="tab">
            <a class="tablink active" onClick={(e) => nav(e)}>
           <h2>signin</h2> 
            </a>
          </h3>
          <h3 class="tab">
            <a class="tablink" onClick={(e) => nav(e)}>
          <h2>login</h2>  
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

