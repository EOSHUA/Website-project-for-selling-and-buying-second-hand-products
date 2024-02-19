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
import Publish from "../publish/Publish";
import Details from "../details/Details";
import UserItems from "../userItems/UserItems";
import About from "../about/About";

export default function Layout() {
  return (
    <div className="layout">
     
      <BrowserRouter>
       <Header />
       <Routes>
         <Route path="/member/deshboard/*" element={<MemberDeshBoard/>} />
       </Routes>
       <Routes>
          <Route path="/guest/*" element={<UserLayout />}></Route>
          <Route path="/member/login" element={<Login/>} />
          <Route path="/member/signin" element={<SignIn />} />
          <Route path="/member/connection" element={ <MemberLayout />}></Route>
          <Route path="/member/deshboard/publish" element={ <Publish />}></Route>
          <Route path="/member/deshboard/details" element={ <Details />}></Route>
          <Route path="/member/deshboard/about" element={ <About />}></Route>
          <Route path="/member/deshboard/useritems" element={ <UserItems />}></Route>
      </Routes>    
      </BrowserRouter>
    </div>
  );
}
