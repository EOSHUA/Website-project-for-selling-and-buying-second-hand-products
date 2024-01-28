import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import './userLayout.css';

export default function UserLayout() {
  return (
    <div className="userLayout">
      <Header />
      <Content />
    </div>
  );
}
