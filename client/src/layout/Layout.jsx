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

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <BrowserRouter>
       <Routes>
        <Route path="/member/login" element={<Login/>} />
        <Route path="/member/signin" element={<SignIn />} />
      
        <Route path="/guest/*" element={<UserLayout />}></Route>
        <Route path="/member/*" element={ <MemberLayout />}></Route>
        {/* <Route path="guest/subcategories/:catName/:id" element={<Content/>} ></Route> */}
         
        
      </Routes>    
      </BrowserRouter>
    </div>
  );
}
