import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  function HandleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function HandleEmailChange(event) {
    setEmail(event.target.value);
  }

  function HandlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function Submit() {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
    };
    const response = await fetch("http://demonewspaper-001-site1.btempurl.com/api/Users/Register", requestOptions)
    const data = await response.json();
    console.log(data)
  }

  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type='username' placeholder="Enter username" onChange={HandleUsernameChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' placeholder="Enter email" onChange={HandleEmailChange}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={HandlePasswordChange}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={Submit}>
        Register
      </Button>
    </Form>

  )
}
