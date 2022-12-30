import React, { useState } from "react";
import './Login.scss';
import logo from '../img/unlv-caeo-official.png';
//import logo from '/img/caeo-logo.png';
import { Routes, Route,useNavigate } from "react-router-dom";


export const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  console.log("login page rendered");

  return (
    <>
      <img className="logo" src={logo} width="50%" alt="logo" />
      <div className="auth-form-container" >


        <h2><u>Login</u></h2>
        <form className=" login-form " onSubmit={handleSubmit}>
          <label htmlFor="email">ACE</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ACE username" name="email" reqired />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" reqired/>
        </form>
        <div>
        {/* <form className="button" onSubmit={handleSubmit}> */}
          < button type="button" className="btn btn-primary float-none" onClick={navigateHome}>Log in</button>
        {/* </form> */}
        </div>
      </div>
    </>
  )
}

export default Login;