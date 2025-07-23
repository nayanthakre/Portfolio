import React from "react";
import './About.css';
import mobile from "../assets/mobileimage.jpg";

function About() {
  return (
    <>
      <div className="about-main">
        <div className="about-heading">About Me</div>
        <div className="about-content">
          <h4>
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "}
          </h4>
          <p>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill.
          </p>
          <a href="">More About Me</a>
          <div class="mobile-banner">
          <img src={mobile} alt="mobileimage" />
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
