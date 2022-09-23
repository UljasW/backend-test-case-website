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

  async function Submit() {
    const requestOptions = {
      method: "POST",
      headers: { "Authorization" : "bearer {token}" },
      body: JSON.stringify({ 
        Username : username,
        Password: password }),
    };
    const response = await fetch("https://reqres.in/api/posts", requestOptions)
    const data = await response.json();

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
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="primary" type="submit" onClick={Submit}>
          Forgot password
        </Button>
      </div>
    </Form>
  );
}
