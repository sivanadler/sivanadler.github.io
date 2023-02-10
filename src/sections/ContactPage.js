import React from "react";
import "../statics/css/contact.scss";
import "../statics/css/common.scss";
import { Row, Col } from "react-bootstrap";
import WhitePane from "../common/WhitePane"
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin
  } from "react-icons/fa";

function ContactPage(props) {

    const content = (
        <div className="contact-content">
            <h3>Stay in Touch!</h3>
            <p><FaEnvelope fill={'#0B5ED7'}/>{"   "}<a href="mailto:sadler2007@gmail.com?subject=Website Inquiry" target="_blank" rel="noreferrer">sadler2007@gmail.com</a></p>
            <p><FaLinkedin fill={'#004182'} strokeWidth={0.5} />{"   "}<a href="https://www.linkedin.com/in/sivanadler/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/sivanadler/</a></p>
            <p><FaGithub fill={'#171515'} strokeWidth={0.5} stroke={'#171515'}/>{"   "}<a href="https://github.com/sivanadler" target="_blank" rel="noreferrer">https://github.com/sivanadler</a></p>
        </div>
    )

  return (
    <div className="contact">
        <div className="section-container">
            <Row className="animate__animated animate__slideInLeft animate__slower">
                <Col className="header"> {'[  '}Contact{'  ]'}</Col>
            </Row>
            <Row>
                <Col xs={12} className="animate__animated animate__slideInLeft animate__slower">
                    <WhitePane content={content}/>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default ContactPage;
