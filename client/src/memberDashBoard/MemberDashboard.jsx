import React from "react";
import './memberDashBoard.css'
import UserItems from "../userItems/UserItems";
import Publish from "../publish/Publish";
import Details from "../details/Details";
import { useNavigate } from "react-router-dom";
export default function MemberDashboard() {
 const navigate = useNavigate()


 const goToPublish =()=>{
  navigate(`publish/`)
 }
 const goToDetails =()=>{
  navigate(`details/`)
 }
 const goToAbout =()=>{
  navigate(`about/`)
 }
 const goToUserItems =()=>{
  navigate(`useritems/`)
 }
 const logOut =()=>{
  let text = "Are you sure you want to go out?";
  if (window.confirm(text)==true) {
    navigate(`/guest/`)
  }
 }
  return (
    <>
    <div >
  <nav>
  <div className="itemMenu" onClick={goToPublish}>publish  ad</div>
  <div className="itemMenu" onClick={goToUserItems}>my ads</div>
  <div className="itemMenu" onClick={goToDetails}>details</div>
  <div className="itemMenu" onClick={goToAbout}>about</div>
  <div className="itemMenu" onClick={logOut}>log out</div>
  <div class="animation start-home"></div>
</nav>
<br/>



         
          </div>
    </>
  );
}
