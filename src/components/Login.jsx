import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type='username' placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div style={{"display" : "flex", "flexDirection" : "row"}}>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="primary" type="submit">
        Forgot password
      </Button>
      </div>
      
    </Form>
  )
}
