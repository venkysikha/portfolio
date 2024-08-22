import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import './Utility.css'

function Tools() {
    const iconStyle = { width: "75px", height: "75px" };
  const techIcon={marginBottom: "20px",
    textAlign: "center",
    fontSize: "2.5rem"}
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <SiVisualstudiocode  style={iconStyle}/>
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <SiPostman style={iconStyle}/>
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <SiVercel style={iconStyle}/>
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <FaWindows style={iconStyle}/>
      </Col>
    </Row>
  );
}

export default Tools;