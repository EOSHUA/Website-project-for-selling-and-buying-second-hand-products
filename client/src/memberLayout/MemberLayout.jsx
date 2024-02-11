import React from "react";
import LogIn from "../logIn/LogIn";
import SignIn from "../signIn/SignIn";
import { Routes, Route } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import './memberLayout.css'

export default function MemberLayout() {

  const navigate = useNavigate();

function nav(e) {
 console.log(e.target.innerHTML);
 navigate('/member/' + e.target.innerHTML);
}

  return (
    <div>
     
      <div className="form-wrap"> 
      <h1>Welcome</h1>
        <div class="tabs">
          <h3 class="tab">
            <a class="tablink active" onClick={(e) => nav(e)}>
            signin
            </a>
          </h3>
          <h3 class="tab">
            <a class="tablink" onClick={(e) => nav(e)}>
            login
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

