import React from "react";
import { useState } from "react";

export default function SignIn() {
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
          familyName:
          <input type="text" id="familyName" onChange={handleChange} />
        </label>
        <br />
        <label>
          email:
          <input type="email" id="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          phone:
          <input type="number" id="phone" onChange={handleChange} />
        </label>
        <br />
        <label>
          password:
          <input type="password" id="password" onChange={handleChange} />
        </label>
        <br />
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
}
