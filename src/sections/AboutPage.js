import React from "react";
import "../statics/css/about.scss";
import "../statics/css/common.scss";
import WhitePane from "../common/WhitePane";
import { Row, Col } from "react-bootstrap";
import sivan from "../statics/images/sivan.jpg";
import {
  FaPizzaSlice,
  FaPaw,
  FaPaintBrush,
  FaStarOfDavid,
} from "react-icons/fa";
import { MdPlace } from "react-icons/md";

function AboutPage(props) {
  const content = (
    <p id="about-me-desc">
      Hello! My name is Sivan and I enjoy building and designing Web
      Applications. My interest in Web Development started a couple of years ago
      when I decided to change my career and learn to code. Since my training at{" "}
      <span className="strong">Flatiron School</span>, my goal has been try to carve a niche for
      myself in the tech world:{" "}
      <span className="strong">
        Full Stack Software Engineer with an expertise in Frontend development
      </span>
      .
      <br />
      <br />
      My eye for design and experience in{" "}
      <span className="strong">UX/UI Design</span> enable me to build
      applications that are <span className="strong">visually attractive</span>,{" "}
      <span className="strong"> highly functional</span> and{" "}
      <span className="strong">technically efficient</span>. I am highly capable
      of identifying creative and dynamic solutions to challenges and adapting
      quickly and seamlessly to change. I also have experience{" "}
      <span className="strong">building RESTful APIs</span>, and{" "}
      <span className="strong">
        deploying codebases using a variety of AWS services
      </span>
      . I am a <span className="strong">proud woman in STEM</span> and would
      love to connect with other female engineers and inspires other women to
      get into engineering.
    </p>
  );
  return (
    <div className="section-container">
      <Row className="animate__animated animate__slideInLeft animate__slower">
        <Col className="header"> {'[  '}About Me{'  ]'}</Col>
      </Row>
      <Row>
        <Col xs={8} className="animate__animated animate__slideInLeft animate__slower">
          <Row className="hobbies-row">
            <Col>
              <span className="about-icon-span">
                <MdPlace />
              </span>
              NYC Native
            </Col>
            <Col>
              <span className="about-icon-span">
                <FaStarOfDavid />
              </span>{" "}
              Israeli American
            </Col>
            <Col>
              <span className="about-icon-span">
                <FaPizzaSlice />
              </span>
              Foodie
            </Col>
          </Row>
          <Row className="hobbies-row">
            <Col>
              <span className="about-icon-span">
                <FaPaw />
              </span>
              Dog Lover
            </Col>
            <Col>
              <span className="about-icon-span">
                <FaPaintBrush />
              </span>
              Studio Artist
            </Col>
            <Col></Col>
          </Row>
          {content}
        </Col>
        <Col xs={4} className="animate__animated animate__slideInRight animate__slower">
          <div id="image-wrapper">
            <img id="about-img" src={sivan} alt="Sivan Adler" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutPage;
