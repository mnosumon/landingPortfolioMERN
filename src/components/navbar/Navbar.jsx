import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-circle"></span>
        <span className="logo-text">CreDesign</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="contact-button">
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
