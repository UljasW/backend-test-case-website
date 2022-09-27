import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function HandleUsernameChange(event) {
    setPassword(event.target.value);
  }

  function HandlePasswordChange(event) {
    setUsername(event.target.value);
  }

  async function Submit(e) {
    e.preventDefault()

    const response = await fetch("http://demonewspaper-001-site1.btempurl.com/api/Users/Login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { 
        username : username,
        password: password 
      }});

    const data = await response.json();
    console.log(data.value);

    if(response.status === 200)
    {
      localStorage.setItem("AccessToken", data);
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
        <Button variant="primary" type="submit">
          Forgot password
        </Button>
      </div>
    </Form>
  );
}
