import React from "react";
import "./about.css";
import AboutIMG from "../../assets/image/aboutIMG.png";
import FrameIcon from "../../assets/icon/frameIcon.png";

const About = () => {
  return (
    <section className="hero-section">
      <div className="container banner_wrapper">
        <div className="image-container">
          <img src={AboutIMG} alt="Designer" />
        </div>
        <div className="content">
          <div className="subTitleWrapper">
            <img className="faramIcon" src={FrameIcon} alt="Frame Icon" />
            <span className="subtitle">I AM DESIGNER</span>
          </div>
          <h1>
            I Can Design <br /> Anything You Want
          </h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit.
          </p>
          <a href="#" className="btn">
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
