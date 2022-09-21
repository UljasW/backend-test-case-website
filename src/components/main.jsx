import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ManageAccount from "./ManageAccount";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="manageAccount" element={<ManageAccount/>}/>
      </Routes>
    </div>
  );
}
