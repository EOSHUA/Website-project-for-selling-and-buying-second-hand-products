import React from "react";
import Logo from "../logo.png";
import MemberLayout from "../memberLayout/MemberLayout";
import UserLayout from '../userLayout/UserLayout'
import { BrowserRouter } from "react-router-dom";
import './layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <BrowserRouter>
        <UserLayout />
        <MemberLayout />
      </BrowserRouter>
    </div>
  );
}
