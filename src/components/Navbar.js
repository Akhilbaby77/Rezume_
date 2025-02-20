import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">ResumeChecker</a>
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#howitworks">How It Works</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-upload">
          <a href="#upload" className="upload-btn">Upload Resume</a> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
