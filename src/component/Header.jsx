import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="Header">
      <div className="logo">
        <Link to="/">Nayan Thakre</Link>
      </div>
      <div className="menu">
        <ul>
          {/* <li><a href="#about">Work</a></li> */}
          {/* <li><a href="#projects">Contact</a></li> */}
          <li><Link to="/Work">Work</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About Us</Link></li> {/* ✅ fixed link */}
        </ul>
      </div>
    </div>
  );
}
