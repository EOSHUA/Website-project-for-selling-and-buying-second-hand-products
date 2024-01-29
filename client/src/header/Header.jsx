import React from "react";
import logo from "../logo.png";
import './header.css'
import login from "./imeges/login.png"

export default function Header() {
  return (
    <>
      <div className="header">
        {<img className="imgHeader" src={logo} style={{ opacity: 0.3 }} />}
        <span className="spanLogin">
        <button className="buttonUserLogin"> <img src={login} width={50} ></img>Login</button>
        <button className="PostingAnAd">Posting an ad
        <svg width="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="publish-ad_plusSymbol__xGTbi"><path d="M12 4.75a.75.75 0 01.743.648l.007.102v5.75h5.75a.75.75 0 01.102 1.493l-.102.007h-5.75v5.75a.75.75 0 01-1.493.102l-.007-.102v-5.75H5.5a.75.75 0 01-.102-1.493l.102-.007h5.75V5.5a.75.75 0 01.75-.75z" fill="currentColor"></path></svg>
         </button>
       </span>
      </div>
    </>
    )
}
