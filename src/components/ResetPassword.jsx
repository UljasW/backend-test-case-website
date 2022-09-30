import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function ResetPassword() {
  const [ResetToken] = useSearchParams();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function HandlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function HandlePassword2Change(event) {
    setPassword2(event.target.value);
  }

  async function Submit(e) {
    e.preventDefault()
    if (password === password2) {
      const response = await fetch("https://demonewspaper.azurewebsites.net/api/Users/resetpassword", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Token: ResetToken.get("token"),
          NewPassword: password
        })
      });

      if (response.status === 200) {
        alert("Password reset")
      } else {
        alert("Somthing went wrong!")
      }
    }
    else alert("Passwords are not the same!")

    

  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={HandlePasswordChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={HandlePassword2Change}
        />
      </Form.Group>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button variant="primary" type="submit" onClick={Submit}>
          Reset password
        </Button>
      </div>
    </Form>
  )
}
