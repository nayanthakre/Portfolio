import React from "react";
import "./Mainpage.css"; // Import the CSS file
import images from "../assets/image.jpg"; // Import the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Mainpage() {
  return (
    <>
      <div className="container">
        <div className="text-section">
          <div className="main-text">
            <h1>HI , I AM NAYAN THAKRE</h1>
            <p>
                I am a Frontend Developer with a passion for creating beautiful and
                functional web applications. I love to turn ideas into reality
                using the latest web technologies.  
            </p>
                <ul>
                    <li><a href="">Contact me </a></li>
                  <li><a href="https://www.linkedin.com/in/nayan-thakare-050672275/" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-linkedin"></i>
</a></li>
                   <li><a href="https://github.com/nayanthakre" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-github"></i>
</a></li>
                </ul>
           
          </div>
        </div>
        <div className="img-section">
            <img src={images} alt="Main"  />
        </div>
       
      </div>
       
    </>
  );
}

export default Mainpage;
