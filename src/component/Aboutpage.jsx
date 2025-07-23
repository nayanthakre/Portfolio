// src/pages/Aboutpage.jsx
import React from "react";
import Aboupage from "../assets/aboutpage.jpg"; // Import the image
import "./Aboutpage.css"; // Import the CSS file
import About_buttons from "./About_buttons";
import Conect from "./Conect";

export default function Aboutpage() {
  return (
    <>
      <div className="about-wrap">
        <div className="About-title">About Us</div>
        <div className="About-content">
          <h3>
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "}
          </h3>
          <p>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill
          </p>
          <button>Download CV</button>
        </div>
      </div>
      <div className="imag-section">
        <img src={Aboupage} alt="mobileimage" />
      </div>

      <div className="languages">
        <div className="title">
          <h1>My Capabilities</h1>
        </div>
        <div className="lang-content">
          <p>
            I am always looking to add more skills.Morbi egestas neque eu
            blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
            purus faucibus tristique ut et dolor.
          </p>
          <About_buttons label="html" />
          <About_buttons label="css" />
          <About_buttons label="javascript" />
          <About_buttons label="react" />
          <About_buttons label="webflow" />
          <About_buttons label="figma" />
          <About_buttons label="photoshop" />
          <About_buttons label="illustrator" />
          <About_buttons label="adobe xd" />
          <About_buttons label="canva" />
        </div>
      </div>

      <div className="experience">
        <div className="exp-title">My Experience</div>
        <div className="exp-content">
          <h4 id="freelance-developer">Freelance Developer</h4>
          <span>Nov 2023 — Present </span>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>

          <h4 id="front-end-intern">Front-End Intern</h4>
          <span>Sep 2023 — Nov 2023 </span>
          <h5>Roos Tech</h5>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <Conect/>  
    </>
  );
}
