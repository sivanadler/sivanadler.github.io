import React from "react";
import { Row, Col } from 'react-bootstrap'
import '../statics/css/home.scss'

function HomePage(props) {

    return (
        <div className="home">
            <svg id="background-wave" viewBox="20 5 425 1000" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"></path>
            </svg>
            <Row className="home-details justify-content-md-center">
                <Col id="avatar-col">
                    <div className="avatar">
                        <div id="gradient">
                            <div className="avatar-img"></div>
                        </div>
                    </div>
                </Col>
                <Col id="details-col">
                    <div className="my-details">
                        <h1>Sivan Adler</h1>
                        <p>Software Engineer with an eye and passion for design</p>
                        <p id="smaller">NYC Native | Israeli American | Foodie | Dog Lover | Studio Artist</p>
                    </div>
                </Col>
            </Row>
        </div>  
    );
}

export default HomePage;
