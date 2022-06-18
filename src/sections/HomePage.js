import React from "react";
import { Row, Col } from 'react-bootstrap'
import '../statics/css/home.scss'

function HomePage(props) {

    return (
        <div>
            <svg id="background-wave" viewBox="20 5 425 1000" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
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
                        <p>Software Engineer with an eye for design</p>
                    </div>
                </Col>
            </Row>
        </div>  
    );
}

export default HomePage;
