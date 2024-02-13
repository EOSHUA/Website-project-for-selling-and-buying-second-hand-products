import React, { useState } from "react";
import "./login.css";
import {  useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const member={
      userName_:username,
      password_:password,
    }
    try {

        const m=await axios.post('http://localhost:4545/member/login',{
        member:member
        }).then((response) => {console.log(response)}).then(goToDeshboard)
    } catch (err) {
      console.log("david");
      alert(err.response.data);
    }

    if (rememberMe) {
      console.log("Remember me is checked");
    }
    console.log(`Submitted username: ${username}, password: ${password}`);
  };

  const goToSignin =()=>{
    navigate(`/member/signin/`);
  }
  const goToDeshboard =()=>{
    navigate(`/member/deshboard/`);
  }


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
        <p>
          <span>Don't have an account yet ? </span>
        <a onClick={goToSignin}>Click here </a>
        </p>
      </form>
      <div className="help-text">
      </div>
    </>
  );
}
