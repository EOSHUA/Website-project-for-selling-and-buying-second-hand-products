import { React, useContext,useEffect } from "react";
import './memberDashBoard.css'
import { useNavigate } from "react-router-dom";
import { memberContext} from "../layout/Layout"



export default function MemberDashboard() {
  const {memberConnected,setMemberConnected}=useContext(memberContext);
 const navigate = useNavigate();


 useEffect(() => {
  navigate(`useritems/`)
}, []);



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
    setMemberConnected({userName:""})
    const temp ={userName:"user not logged in"}
    // localStorage.removeItem("currentUser")
     localStorage.setItem(
      "currentUser",
      JSON.stringify(temp))
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
