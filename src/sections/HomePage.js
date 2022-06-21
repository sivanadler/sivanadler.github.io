import React from "react";
import { Row, Col } from 'react-bootstrap'
import '../statics/css/home.scss'
import Wave from "../common/Wave";

function HomePage(props) {

    return (
        <div className="home">
            <Wave />
            <Row className="home-details">
                <Row>
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
                            <p>Full Stack Software Engineer with an eye for design</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h6 id="smaller">NYC Native | Israeli American | Foodie | Dog Lover | Studio Artist</h6>
                    </Col>
                </Row>
            </Row>  
        </div>
    );
}

export default HomePage;
