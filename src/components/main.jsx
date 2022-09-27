import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Delete from "./Delete";
import ForgotPassword from "./ForgotPassword";


export default function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="delete" element={<Delete/>}/>
        <Route path="forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}
