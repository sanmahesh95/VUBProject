import React, { useState } from "react";
import './Login.scss';
import logo from '../../img/unlv-caeo-official.png';


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
      <img className="logo" src={logo} width="80%" alt="logo" />
      <div className="auth-form-container">


        <h3>Login</h3>
        <form className=" login-form " onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="@unlv.edu" id="email" name="email" reqired />
          <label htmlFor="password">Password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        </form>
        <form className="button" onSubmit={handleSubmit}>
          {/* <button><b> Log in </b></button> */}

          < button type="button" theme="blue" className="btn btn-primary float-none"> Log in </button>
        </form>
      </div>
    </>
  )
}

export default Login;
