import React from "react";
import { Row, Col } from 'react-bootstrap'
import WhitePane from '../common/WhitePane'
import "../statics/css/experience.scss"

function ExperiencePage() {
    const content = (
        <div>
            <Row className="experience-header-row">
                <Col>
                <h5 className="experience-header">Senior Full Stack Software Developer</h5> 
                <p className="date-to-float">Oct 2022 - Present</p>
                <p className="experience-subheader">Genesis Research</p>
                </Col>
            </Row>
            <Row className="experience-bullet-row">
                <ul>
                    <li>Lead UI developer for <a href="https://www.genesisrg.com/evidai" target="_blank" rel="noreferrer">EvidAI</a>, the world’s largest current medical literature research platform, used by leading biomedical researchers. </li>
                    <li>Managed a team of developers working on EvidAI and delegated tasks (i.e. new features, bug fixes, etc.) to the team.</li>
                    <li>Created code structure, file organization and branching standards for multiple company projects, enabling more efficient collaborations.</li>
                    <li>Developed and designed diagrams, visualizations, and website flow for a client based on project goals using ReactJs.</li>
                    <li>Converted old code bases to use modern developments in ReactJS, including moving from life cycle events to hooks and updating routing based on react-router-dom updates.</li>
                    <li>Tested code using docker containers for consistency.</li>
                </ul>
            </Row>
            <hr />

            <Row>
                <Col>
                <h5 className="experience-header">Full Stack Software Developer</h5> 
                <p className="date-to-float">Sep 2019 - Sep 2022</p>
                <p className="experience-subheader">Genesis Research</p>
                </Col>
            </Row>
            <Row className="experience-bullet-row">
                <ul>
                    <li>Singlehandedly converted  EvidAI from an AngularJs app into a React production SaaS system. Developed novel visualizations, streamlined UI/UX design and created a maintainable codebase. </li>
                    <li>Rebuilt <a href="https://www.genesisrg.com/" target="_blank" rel="noreferrer">company website</a> in React, working with biomedical experts and company executives to produce a website that enhanced the company brand.</li>
                    <li>Developed a full stack admin tool with a React frontend and Python (Django) backend, </li>
                    <li>Redesigned routing from a simple single page app into a multi-page product to streamline user experience based on client feedback. </li>
                    <li>Handled deployment of full stack applications using AWS services, including S3, CloudFront, Elastic Beanstalk, Route 53, and RDS.</li>
                    <li>Maintained multiple MySQL databases and created complex database structures based on product specs.</li>
                </ul>
            </Row>
        </div>
    )
    return (
        <div className="section-container">
            <Row className="animate__animated animate__slideInLeft animate__slower">
                <Col xs={12} className="header"> {'[  '}Experience{'  ]'}</Col>
            </Row>
            <Row className="animate__animated animate__slideInRight animate__slower">
                <Col xs={12}>
                    <WhitePane content={content}/>
                </Col>
            </Row>
        </div>
    )
}

export default ExperiencePage