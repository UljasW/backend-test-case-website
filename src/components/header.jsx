import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function header() {
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
        <Link to="/search" className="btn" style={{ textDecoration: "none" }}>
          <Button variant="primary">Search users</Button>
        </Link>
        <Link to="/accounts" className="btn" style={{ textDecoration: "none" }}>
          <Button variant="primary">Manage account</Button>
        </Link>
      </div>
    </div>
  );
}
