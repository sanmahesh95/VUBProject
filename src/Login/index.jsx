import React, { useState } from "react";
import './Login.css';
import logo1 from '../img/caeo-logo.png';
import logo from '../img/unlv-official.png';

import { Routes, Route,useNavigate } from "react-router-dom";




const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/MyPrograms');
  };

  return (
    <>    
    <img className="logo" src={logo} width="300px" height="300px" alt="logo" />
      <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        <img className="logo" src={logo1} width="100%" alt="logo" />
          <h2 className="Auth-form-title"><u>Login</u></h2>
          <div>
            
            <label className="Auth-form-email">ACE</label>
            
            </div>
            <div>
            <input className="Auth-form-label" type="email" placeholder="ACE username" />
          </div>
          <div>
            <label className="Auth-form-pass">Password</label>
            </div>
            <div>
            <input className="Auth-form-label" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*****************" id="password" name="password" reqired/>
          </div>
          <div>
            <form className="button" onSubmit={handleSubmit}>
            < button type="button"  className="button" onClick={navigateHome}>Log in</button>
            </form>
          </div>
          
        </div>
      </form>
      
    </div>
  
    </>
  )
}

export default Login;