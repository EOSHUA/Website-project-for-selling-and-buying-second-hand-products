import React from "react";
import LogIn from "../logIn/LogIn";
import SignIn from "../signIn/SignIn";
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
