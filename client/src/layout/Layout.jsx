import React from "react";
import Logo from "../logo.png";
import MemberLayout from "../memberLayout/MemberLayout";
import UserLayout from '../userLayout/UserLayout'
import SubCategories from "../subCategories/SubCategories";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import './layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <BrowserRouter>
       <Routes>
        <Route path="/guest/" element={<UserLayout />}></Route>
        <Route path="/member/*" element={ <MemberLayout />}></Route>
        <Route path="/guest/subcategories/:catName" element={<SubCategories />} />
         
        
      </Routes>    
      </BrowserRouter>
    </div>
  );
}
