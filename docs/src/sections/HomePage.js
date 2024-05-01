import React from "react";
import { Row, Col } from 'react-bootstrap'
import '../statics/css/home.scss'

function HomePage(props) {

    return (
        <div className="home">
            <Row className="home-details">
                
                <Col id="details-col" className="animate__animated animate__slideInRight animate__slower">
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
