import React, { useState } from "react";
import "./src/Login.css";
//import StatBox from "../../components/StatBox";
import logo from '../img/unlv-caeo-official.png';


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
 

  return (
    <>
      {/* <img className="logo" src={logo} width="100%" alt="logo" /> */}
      <div className="auth-form-container" >
<img className="logo" src={logo} width="100%" alt="logo" />

        <h3><u>Login</u></h3>
        <form className=" login-form " onSubmit={handleSubmit}>
          <label htmlFor="email" text-align="left" font-weight="bold">ACE</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="ACE username" name="email" reqired />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" reqired/>
        </form>
        <form className="button" onSubmit={handleSubmit}>
        < button type="button" className="btn btn-primary float-none"> Log in </button>
        </form>
      </div>
    </>
  )
}

export default Login;