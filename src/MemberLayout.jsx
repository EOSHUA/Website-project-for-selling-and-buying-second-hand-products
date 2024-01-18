import React from "react";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import { Routes, Route } from "react-router-dom";

export default function MemberLayout() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
