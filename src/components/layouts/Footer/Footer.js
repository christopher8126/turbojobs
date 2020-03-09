import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        textAlign: "center",
        backgroundColor: "#343A40",
        color: "white",
        paddingTop: "24px"
      }}
    >
      <h2>Logo</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="" className="nav-link">
          NavLink
        </a>
        <a href="" className="nav-link">
          NavLink
        </a>
        <a href="" className="nav-link">
          NavLink
        </a>
        <a href="" className="nav-link">
          NavLink
        </a>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="" className="nav-link">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" className="nav-link">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a href="" className="nav-link">
          <i class="fab fa-facebook-square"></i>
        </a>
      </div>
      <div
        style={{
          height: "5vh",
          textAlign: "center",
          backgroundColor: "rgb(22, 24, 27)"
        }}
      >
        <p style={{ margin: "0" }}>
          Copyright 2020 | Turbo Jobs. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
