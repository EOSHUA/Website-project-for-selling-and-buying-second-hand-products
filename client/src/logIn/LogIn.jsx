import React, { useContext, useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { memberContext } from "../layout/Layout";
import home from "./imeges/home.png"

export default function Login() {
  const { memberConnected, setMemberConnected } = useContext(memberContext);
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
    const member = {
      userName_: username,
      password_: password,
    };

    try {
        const response = await axios.post("http://localhost:4545/member/login", {
          member,
        }).then((response) => {
        if (response.data && response.data.length > 0) {
            setMemberConnected({
            userName: response.data[0].userName,
            email: response.data[0].email,
            password: response.data[0].password,
            userId: response.data[0]._id,
            });
            goToDeshboard();
        } else {
            throw new Error("Received an empty data array from the server");
        }})
     } catch (err) {
        if (err.response) {
            console.error(
            "Server responded with an error:",
            err.response.status,
            err.response.data
            );
        alert(err.response.data.message);
        } else if (err.request) {
        console.error("No response received:", err.request);
        } else {
        console.error("Error setting up the request:", err.message);
        }
    }
  };

  const goToSignin = () => {
    navigate(`/member/signin/`);
  };
  const goToDeshboard = () => {
    navigate(`/member/deshboard/`);
  };
  const goToHome=()=>{
    navigate(`/guest/`)
  }
  return (
    <>
     <div className="goBack" onClick={goToHome}>
     <img src={home} width={50} ></img>
     </div>
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
        {/* <div className="remember_me_warp">
          <input
            type="checkbox"
            className="checkbox"
            id="remember_me"
            checked={rememberMe}
            onChange={(event) => setRememberMe(event.target.checked)}
          />
          <label  htmlFor="remember_me">Remember me</label>
        </div> */}

        <input type="submit" className="buttonLogin" value="Login" />
        <p>
          <a onClick={goToSignin}>Forget your password?</a>
        </p>
        <p>
          <span className="spanGoToSugnIn">Don't have an account yet ? </span>
          <a onClick={goToSignin}>Click here </a>
        </p>
      </form>
      <div className="help-text"></div>
    </>
  );
}
