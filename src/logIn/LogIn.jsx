import React from "react";

import MemberDashboard from "../MemberDashboard";
import { useState } from "react";

export default function LogIn() {
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" id="Name" onChange={handleChange} />
          </label>
          <br />
          <label>
            password:
            <input type="password" id="password" onChange={handleChange} />
          </label>
          <br />
          <label>
            submit:
            <input type="submit" value="Submit" />
          </label>
      </form>

      
      <MemberDashboard />
    </div>
  );
}
