import React from 'react';
import resume from './iconss/resume.jpg'; // Resume image
import resumePDF from './iconss/venkatResume.pdf'; // Actual resume PDF
import './Resume.css'

export default function Resume() {
  // Base container styles
  const containerStyle = {
    padding: "50px",
    maxWidth: "800px",
    minHeight: "800px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    margin: "20px auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  };


  // Styles for the image to make it responsive
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    marginTop: "20px",
    borderRadius: "10px",
  };

  // Styles for the download button
  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    textAlign: "center",
  };

  

  return (
    <div className="project" style={containerStyle}>
      <h1 className='heading'>My Resume</h1>
      <img src={resume} className='image'  alt="My Resume" style={imageStyle} />
      <a className='link'  href={resumePDF} download="Sikha_Venkateswararao_Resume.pdf" style={buttonStyle}>
        Download Resume
      </a>
    </div>
  );
}
