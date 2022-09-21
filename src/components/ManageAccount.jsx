import React from "react";
import Login from "./Login";
import Register from "./Register";
import Button from "react-bootstrap/Button";

export default function ManageAccount() {
  return (
    <div style={{ width: "50%" }}>
      <h2>Login</h2>
      <Login />
      <h2>Register</h2>
      <Register />
      <h2>Delete account</h2>
      <Button variant="danger">Delete</Button>
    </div>
  );
}
