import { React, useContext, useState , useEffect} from "react";
import logo from "../logo.png";
import './header.css'

import login from "./imeges/login.png"
import home from "./imeges/house-chimney.png"
import deshboard from "./imeges/menu-dots.png"
import { useNavigate } from "react-router-dom";
import { memberContext} from "../layout/Layout"


export default function Header() {
  const navigate = useNavigate();
  const {memberConnected,setMemberConnected}=useContext(memberContext);
  const [buttonLogin, setButtonLogin] =useState(true);

  useEffect(() => {
   const addToLocal= async()=>{
    await localStorage.setItem(
      "currentUser",
      JSON.stringify(memberConnected))
    }
    addToLocal()
  }, [memberConnected]);
  

  const goToHome =()=>{
    console.log("jpp");
    navigate(`/guest`);
  }
  const goToDeshboard =()=>{
    navigate(`/member/deshboard/`);
  }

  const goToLogin =async(e) =>{
    
    if(e.target.innerHTML!=="login")
    {
      await navigate(`/member/deshboard/details/`);
    }
    if(e.target.innerHTML==="login") {
    await navigate(`/member/connection`)
  }
  }

  const logOut =()=>{
    let text = "Are you sure you want to go out?";
    if (window.confirm(text)==true) {
      setMemberConnected("")
      navigate(`/guest/`)
    }
   }
  
  return (
    <>
      <div className="header">
         {<img className="imgHeader" src={logo} style={{ opacity: 0.3 }} />}
         
          <div className="spanLogin" >
            <button className="buttonHeader" >
               <img src={login} width={50} ></img>
               <p onClick={(e)=>goToLogin(e)}>
               { localStorage.getItem("currentUser")==undefined || localStorage.getItem("currentUser").length<1 ? "login" :
               memberConnected.userName.length> 0 ? `Hello ${memberConnected.userName}`:"login"}</p>
            </button>
          
              {memberConnected.userName && <button className="buttonHeader "> 
              {
              window.location.href.includes("member") ?<div className="buttonHeader" onClick={goToHome}>
                <img src={home} width={50} ></img></div>:
                <div className="buttonHeader" onClick={goToDeshboard}><img src={deshboard} width={50} >
                </img></div>}
            </button>}
          </div>

      </div>
    </>
    )
}
