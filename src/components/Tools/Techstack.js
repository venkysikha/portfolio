import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
    SiMysql
} from "react-icons/si";
import './Utility.css'

function Techstack() {
  const iconStyle = { width: "75px", height: "75px" };
  const techIcon={marginBottom: "20px",
    textAlign: "center",
    fontSize: "2.5rem"}

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <DiJavascript1 style={iconStyle} />
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <DiNodejs style={iconStyle} />
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <DiReact style={iconStyle} />
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <DiMongodb style={iconStyle} />
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <DiPython style={iconStyle} />
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <DiJava style={iconStyle} />
      </Col>
      <Col xs={6} md={3} className="tech-icons" style={techIcon}>
        <SiMysql style={iconStyle} />
      </Col>
    </Row>
  );
}

export default Techstack;
