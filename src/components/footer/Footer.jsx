import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-section">
          <h2 class="brand">
            <span class="highlight">Cre</span>Design
          </h2>
          <p class="description">
            At vero eos et accusamus et iusto odio dign ducimus qui blanditiis
            praesentium.
          </p>
          <a href="mailto:credesign@gmail.com" class="email">
            credesign@gmail.com
          </a>
        </div>

        <div class="footer-section">
          <h3>Explore Links</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>My Services</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Mobile App</li>
            <li>Graphics Design</li>
            <li>Web Developer</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Follow Me</h3>
          <div class="social-icons">
            <a href="#" class="icon">
              F
            </a>
            <a href="#" class="icon">
              T
            </a>
            <a href="#" class="icon">
              D
            </a>
            <a href="#" class="icon">
              B
            </a>
          </div>
          <address>
            202 Dog Hill Lane Beloit, KS 67420
            <br />
            1-800-915-6270
          </address>
        </div>
      </div>

      <div class="footer-bottom">
        <p>All rights reserved © 2023 CreDesign</p>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
