import React, { useState } from "react";
import '../memberLayout/memberLayout.css'



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

    console.log(
      `Submitted username: ${username}, password: ${password}, email: ${email}`
    );
  };

  return (
    <div>
      <form className="form-wrap"  onSubmit={handleSubmit} >
        <input type="email" class="input" placeholder="Email" onChange={handleEmailChange} />
        <input type="text" class="input"   placeholder="Username" onChange={handleUsernameChange} />
        <input type="password" class="input"  placeholder="Password"  onChange={handlePasswordChange}/>
        
        {/* <input type="password" class="input" id="user_pass_confirm" autocomplete="off" placeholder="Confirm Password" value={passwordConfirm} onChange={handlePasswordConfirmChange} /> */}
        <input type="submit" class="button" value="Sign In" />
        <p>By signing up, you agree to our</p>
        <p>
          <a href="#">Terms of service</a>
        </p>
      </form>
      <div class="help-text">
      </div>
    </div>
  );
}
