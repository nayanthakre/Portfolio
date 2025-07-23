import React from "react";
import card from "../assets/card1.jpg";
import './Featuresection.css';


function Featuresection({image,paragraph, year, technologies, role}) {
  return (
    <>
        <div className="wrap">
        <div className="text">
        <h1>Feature Project</h1>
        <p>
          here are some Selected project that showcase my skills and
          experience.passion for Frontend-devlopment
        </p>
      </div>
      <div className="main-area">
      
        <div className="section-img">
          <img src={image} alt="Project 1" />
        </div>
      
          <div className="heading">
            <h3>promotion landing page for our favourite show </h3>
            <p>
              {paragraph}
            </p>
            <div className="info">
               <h5>Project info</h5>
              <p>Year: {year}</p>
              <p>Technologies: {technologies}</p>
              <p>Role: {role}</p>

          </div>
          <div className="links">
            <a href="#">Live Demo</a>
            <a href="#">See on Github</a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Featuresection;
