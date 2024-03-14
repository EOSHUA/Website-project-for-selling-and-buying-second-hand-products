import './sinIn.css'
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
import home from "./imeges/home.png"




 export default function SignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // const [formData, setFormData] = useState(
  //   {
  //     username: "",
  //     password: "",
  //     // passwordConfirm: "",
  //     email: ""
  //   }
  // );

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handlePasswordConfirmChange = (event) => {
  //   setPasswordConfirm(event.target.value);
  // }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser={
      userName_:username,
      password_:password,
      email_:email
    }
    try {
      
     const succuss = await axios.post('http://localhost:4545/member/signIn',{
        newuser:newUser
      }).then(alert("You have successfully registered!")).then(getToLogin);
      
      
    } catch (error) {
      alert(error.response.data);
    }


  };
  const getToLogin =()=>{
    navigate(`/member/login/`);
  }
  const goToHome=()=>{
    navigate(`/guest/`)
  }

  return (
    <div>
       <div className="goBack" onClick={goToHome}>
       <img src={home} width={50} ></img>
     </div>
      <form className="form-wrap"  onSubmit={handleSubmit} >
        <h2>Hi, nice to meet you</h2>
        <input type="text" class="input"   placeholder="Username" onChange={handleUsernameChange} />
        <input type="email" className="inputEmail input" placeholder="Email" onChange={handleEmailChange} />
        <input type="password" class="input"  placeholder="Password"  onChange={handlePasswordChange}/>
        <input type="submit" class="buttonSignIn" value="Sign In" />
        <p className="BySigningUp">By signing up, you agree to our</p>
        <p>
          <span className="spanGoToSugnIn">Do you have an account ? </span>
      <a onClick={getToLogin}>Click here </a>
        </p>
      </form>
      <div class="help-text">
      </div>
    </div>
  );
}
