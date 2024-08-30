import {
  Link
} from "react-router-dom";
import React, { useState } from "react";
import './Navbar.css';
import venky from './iconss/venkat.png';

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  
  const navStyle = {
      backgroundColor: "rgba(18,18,62)",
  }
  
  const textCol = {
      color: "white",
      fontSize: "20px",
      gap: "15px"
  }

  const toggleMode = () => {
      setDarkMode(!darkMode); // Toggle the mode

      if (darkMode) {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
      } else {
          document.body.style.backgroundColor = "rgb(0, 0, 33)";
          document.body.style.color = "white";
      }
  };

  return (
      <>
          <nav className="navbar navbar-expand-lg " style={navStyle}>
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/" style={textCol}>
                      <img src={venky} alt="logo" style={{ height: "50px", width: "60px" }} />
                  </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  {/* Mode Button for Mobile */}
                  <button className="btn btn-secondary d-lg-none ms-2 mode-btn-mobile" onClick={toggleMode}>Mode</button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link" aria-current="page" to="/" style={textCol}>Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/about" style={textCol}>About</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/project" style={textCol}>Projects</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/contact" style={textCol}>Contact Me</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/resume" style={textCol}>Resume</Link>
                          </li>
                      </ul>
                      <div className="d-flex ms-auto">
                          {/* Mode Button for Desktop */}
                          <button className="btn d-none d-lg-block mode-btn" onClick={toggleMode}>Mode</button>
                      </div>
                  </div>
              </div>
          </nav>
      </>
  )
}
export default Navbar;
