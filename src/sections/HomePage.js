import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { FaHome, FaUser, FaListAlt } from 'react-icons/fa'
import image from '../statics/images/sivan.jpg'
import '../statics/css/home.css'

function HomePage() {
  return (
      <Container fluid>
        <Row>
            <Col id="left-col">
                <ul className="nav-list">
                    <li className="nav-list-item"> <FaHome />{'   '} <span>Home</span></li>
                    <li className="nav-list-item"><FaUser />{'   '} <span>About</span></li>
                    <li className="nav-list-item"><FaListAlt />{'   '} <span>Experience</span></li>
                </ul>
            </Col>   
            <Col id="right-col" xs={6}>
                <svg id="background-wave" viewBox="20 5 425 1000" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill:"#eee"}}></path>
                </svg>
                <Row className="home-details">
                    <Col id="avatar-col">
                        <div className="avatar">
                            <div className="avatar-img"></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="my-details">
                            <h1>Sivan Adler</h1>
                            <h6>Software Engineer with an eye for design</h6>
                        </div>
                    </Col>

                </Row>
            </Col>   
        </Row>
      </Container>
  );
}

export default HomePage;
