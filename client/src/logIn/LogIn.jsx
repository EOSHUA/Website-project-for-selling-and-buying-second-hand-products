import React, { useState } from "react";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (rememberMe) {
      console.log("Remember me is checked");
    }

    console.log(`Submitted username: ${username}, password: ${password}`);
  };

  return (
    <>
      <form className="form-wrap" onSubmit={handleSubmit}>
        <h2>hi, good to see you!</h2>
        <input
          type="text"
          className="input"
          id="user_login"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          className="input"
          id="user_pass"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="remember_me_warp">
          <input
            type="checkbox"
            className="checkbox"
            id="remember_me"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label  htmlFor="remember_me">Remember me</label> {/* Fixed label */}
        </div>

        <input type="submit" className="buttonLogin" value="Login" />
        <p>
          <a href="#">Forget your password?</a>
        </p>
      </form>
      <div className="help-text">
      </div>
    </>
  );
}
