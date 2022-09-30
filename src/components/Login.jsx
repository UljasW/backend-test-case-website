import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function HandleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function HandlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function Submit(e) {
    e.preventDefault()
    console.log(username)
    console.log(password)
    const response = await fetch("https://demonewspaper.azurewebsites.net/api/Users/login", {
      method: 'POST',
      headers : { 
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify({ 
        username : username,
        password: password 
      })});

    const data = await response.json();
  
    if(response.status === 200)
    {
      alert("User is logged in")
      localStorage.setItem("AccessToken", data);
    }else{
      alert(data)
    }

  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          onChange={HandleUsernameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={HandlePasswordChange}
        />
      </Form.Group>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="primary" type="submit" onClick={Submit}>
          Login
        </Button>
        <Link to="/forgotpassword" className="btn" style={{ textDecoration: "none" }}>
          <Button variant="primary">Forgot password</Button>
        </Link>
      </div>
    </Form>
  );
}
