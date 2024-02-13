import React from "react";
import Logo from "../logo.png";
import Header from "../header/Header";
import MemberLayout from "../memberLayout/MemberLayout";
import UserLayout from '../userLayout/UserLayout'
import SubCategories from "../subCategories/SubCategories";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import './layout.css'
import Content from "../content/Content";
import Login from "../logIn/LogIn";
import SignIn from "../signIn/SignIn";
import MemberDeshBoard from '../memberDashBoard/MemberDashboard'

export default function Layout() {
  return (
    <div className="layout">
     
      <BrowserRouter>
       <Header />
       <Routes>
        <Route path="/member/login" element={<Login/>} />
        <Route path="/member/signin" element={<SignIn />} />
        <Route path="/member/deshboard" element={<MemberDeshBoard/>} />
        <Route path="/guest/*" element={<UserLayout />}></Route>
        <Route path="/member/*" element={ <MemberLayout />}></Route>
       
      </Routes>    
      </BrowserRouter>
    </div>
  );
}
