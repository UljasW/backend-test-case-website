import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Home() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Search user</Form.Label>
          <Form.Control placeholder="Enter search" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
