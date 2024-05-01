import React from "react";
import "../statics/css/education.scss";
import "../statics/css/common.scss";
import { Row, Col } from "react-bootstrap";
import WhitePane from "../common/WhitePane"
function EducationPage(props) {

    const content = (
        <div>
            <Row className="experience-header-row">
                <Col>
                <h5 className="experience-header">Flatiron School</h5> 
                <p className="date-to-float">Jan 2019 - Apr 2019</p>
                <p className="experience-subheader">Full Stack Web Development</p>
                </Col>
                <Row className="experience-bullet-row">
                    <ul>
                        <li>Javascript, React, Redux, Ruby, Rails, SQL, PostgreSQL, HTML, CSS, Amazon Web Services (AWS)</li>
                    </ul>
                </Row>
            </Row>

            <Row className="experience-header-row">
                <Col>
                <h5 className="experience-header">New York Code & Design Academy</h5> 
                <p className="date-to-float">May 2017 - Sep 2018</p>
                <p className="experience-subheader">UX Design & Web Development Intensives</p>
                </Col>
            </Row>

            <Row className="experience-header-row">
                <Col>
                <h5 className="experience-header">Muhlenberg College</h5> 
                <p className="date-to-float">Aug 2012 - May 2016</p>
                <p className="experience-subheader">Major: Pyschology ; Minors: Jewish Studies & Studio Art</p>
                </Col>
            </Row>
        </div>
    )

  return (
    <div className="education">
        <div className="section-container">
            <Row className="animate__animated animate__slideInLeft animate__slower">
                <Col className="header"> {'[  '}Education{'  ]'}</Col>
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

export default EducationPage;
