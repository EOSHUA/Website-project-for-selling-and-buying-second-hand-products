import React, { useState } from "react";
// import '../memberLayout/memberLayout.css'
import './sinIn.css'



 export default function SignIn() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (password !== passwordConfirm) {
    //   alert("Passwords do not match");
    //   return;
    // }

  };

  return (
    <div>
      <form className="form-wrap"  onSubmit={handleSubmit} >
        <h2>Hi, nice to meet you</h2>
        <input type="email" className="inputEmail input" placeholder="Email" onChange={handleEmailChange} />
        <input type="text" class="input"   placeholder="Username" onChange={handleUsernameChange} />
        <input type="password" class="input"  placeholder="Password"  onChange={handlePasswordChange}/>
        <input type="submit" class="buttonSignIn" value="Sign In" />
        <p className="BySigningUp">By signing up, you agree to our</p>
      </form>
      <div class="help-text">
      </div>
    </div>
  );
}
