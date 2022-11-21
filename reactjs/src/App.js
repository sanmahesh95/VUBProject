import React from "react";
import './App.css';
import Login from "./Containers/Login/Login";
import Home from "./Containers/Home/Home";
import { Routes, Route } from 'react-router-dom';


export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Home />} path="/Home" />
        {/* <Route element={<div>Hello user - home page</div>} path="/home" /> */}

      </Routes>

    </div>
  );

}


