import React from "react";
import logo from "../logo.png";
import './header.css'

export default function Header() {
  return (
    <>
      <div className="header">
        {<img src={logo} style={{ opacity: 0.3 }} />}
      </div>
    </>
    )
}
