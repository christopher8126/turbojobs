import React from "react";
import "./Navigation.module.css";

function Navigation() {
  return (
    <div className="navbar bg-dark" style={{ color: "white" }}>
      <div>
        <h1>Logo</h1>
      </div>
      <nav className="nav">
        <div
          className="nav-link"
          style={{
            border: ".5px solid orange",
            borderRadius: "4px",
            marginRight: "4px"
          }}
        >
          <a href="#" style={{ padding: "0" }}>
            Log In
          </a>
        </div>
        <div
          className="nav-link"
          style={{ border: ".5px solid orange", borderRadius: "4px" }}
        >
          <a href="#">Sign Up</a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
