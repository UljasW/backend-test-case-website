import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        height: "100px",
        background: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", with: "500px" }}>
        <Link to="/" className="btn" style={{ textDecoration: "none" }}>
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="/login" className="btn" style={{ textDecoration: "none" }}>
          <Button variant="primary">Login</Button>
        </Link>
        <Link to="/register" className="btn" style={{ textDecoration: "none" }}>
          <Button variant="primary">Register</Button>
        </Link>
        <Link to="/delete" className="btn" style={{ textDecoration: "none" }}>
          <Button variant="primary">Delete account</Button>
        </Link>
      </div>
    </div>
  );
}
