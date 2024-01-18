import React from "react";
import logo from "./logo.png";

export default function Header() {
  return <div>{<img src={logo} style={{ opacity: 0.3 }} />}</div>;
}
