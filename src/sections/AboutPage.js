import React from "react";
import Nav from "../common/Nav";
import { Container, Row, Col } from 'react-bootstrap'

function AboutPage() {
  return (
    <Container fluid>
        <Row>
            <Col id="left-col">
                <Nav />
            </Col>  
            <Col id="right-col">
                <h1>hello world</h1>
            </Col>
        </Row>
    </Container>
  );
}

export default AboutPage;
