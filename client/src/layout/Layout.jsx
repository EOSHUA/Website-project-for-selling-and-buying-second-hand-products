import React from "react";
import { useState,useContext,createContext } from "react";
import Logo from "../logo.png";
import Header from "../header/Header";
import MemberLayout from "../memberLayout/MemberLayout";
import UserLayout from '../userLayout/UserLayout'
import SubCategories from "../subCategories/SubCategories";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import './layout.css'
import Login from "../logIn/LogIn";
import SignIn from "../signIn/SignIn";
import MemberDeshBoard from '../memberDashBoard/MemberDashboard'
import Publish from "../publish/Publish";
import Details from "../details/Details";
import UserItems from "../userItems/UserItems";
import About from "../about/About";
import ItemInfo from "../itemInfo/ItemInfo";

export const memberContext = React.createContext();

export default function Layout() {

const [memberConnected,setMemberConnected]=useState(
  {
    userName:"",
    email:"",
    passwords:"",
    userId:""
  }
)



  return (
    <div className="layout">
      <memberContext.Provider value={{ memberConnected, setMemberConnected }}>
      <BrowserRouter>
       <Header />
       <Routes>
         <Route path="/member/deshboard/*" element={<MemberDeshBoard/>} />
       </Routes>
       <Routes>
          <Route path="/guest/*" element={<UserLayout />}></Route>
          <Route path="/member/login" element={<Login/>} />
          <Route path="/member/signin" element={<SignIn />} />
          <Route path="/member/connection/" element={ <MemberLayout />}></Route>
          <Route path="/member/deshboard/publish" element={ <Publish />}></Route>
          <Route path="/member/deshboard/details" element={ <Details />}></Route>
          <Route path="/member/deshboard/about" element={ <About />}></Route>
          <Route path="/member/deshboard/useritems" element={ <UserItems />}></Route>
          <Route path="/guest/iteminfo" element={ <ItemInfo />}></Route>
      </Routes>    
      </BrowserRouter>
      </memberContext.Provider>
    </div>
  );
}
