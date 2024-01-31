import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import './userLayout.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="userLayout">
      <Content />
      {/* <Routes>
      
     
      <Route path="/" element={<Content />}></Route>
      </Routes>
    */}
    </div>
  );
}
