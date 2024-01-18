import React from "react";
import Logo from "./logo.png";
import MemberLayout from "./MemberLayout";
import UserLayout from "./UserLayout";
import { BrowserRouter } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <BrowserRouter>
        <UserLayout />
        <MemberLayout />
      </BrowserRouter>
    </div>
  );
}
