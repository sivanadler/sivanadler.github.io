import WhitePane from '../common/WhitePane'
import { Row, Col, Badge } from 'react-bootstrap'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaAws,
  FaDocker,
  FaPython,
  FaSketch,
  FaInvision,
  FaLightbulb,
} from "react-icons/fa";
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiRedux,
  SiPostgresql,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobexd,
  SiMicrosoftexcel,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
} from "react-icons/si";
import { RiAngularjsFill } from 'react-icons/ri'
import { GrMysql } from 'react-icons/gr'
import { DiRuby } from 'react-icons/di'
import "../statics/css/common.scss"
import "../statics/css/skills.scss"

function SkillsPage(){
    const content = (
        <div>
            <Row className="skills-row">
                <Col>
                    <h5 className="skills-header">Areas of Expertise {" "}</h5>
                        <Badge><FaReact fill={'#61DBFB'} strokeWidth={8} stroke={'#61DBFB'}/>{" "}ReactJS</Badge>
                        <Badge><IoLogoJavascript  fill={'#F0DB4F'} strokeWidth={8} stroke={'#F0DB4F'}/>{" "}Javascript</Badge>
                        <Badge><SiRedux fill={'#764abc'} strokeWidth={0.5} stroke={'#764abc'}/>{" "} Redux</Badge>
                        <Badge><FaHtml5 fill={'#e34c26'} strokeWidth={0.5} stroke={'#e34c26'}/>{" "} HTML</Badge>
                        <Badge><FaCss3Alt fill={'#264de4'} strokeWidth={0.5} stroke={'#264de4'}/>{" "} CSS</Badge>
                        <Badge><FaGithub fill={'#171515'} strokeWidth={0.5} stroke={'#171515'}/>{" "} Git</Badge>
                </Col>
            </Row>
            <Row className="skills-row">
                <Col>
                    <h5 className="skills-header">Technical Skills{" "}</h5>
                        <Badge><RiAngularjsFill fill={'#dd1b16'} strokeWidth={0} stroke={'#dd1b16'}/>{" "} AngularJS</Badge>
                        <Badge><FaAws fill={'#FF9900'} strokeWidth={6} stroke={'#FF9900'}/>{" "} AWS</Badge>
                        <Badge><FaDocker fill={'#0db7ed'} strokeWidth={6} stroke={'#0db7ed'}/>{" "} Docker</Badge>
                        <Badge><FaPython fill={'#4B8BBE'} strokeWidth={2} stroke={'#4B8BBE'}/>{" "} Python (Django)</Badge>
                        <Badge><DiRuby fill={'#A91401'} strokeWidth={0} stroke={'#A91401'}/>{" "} Ruby (Rails)</Badge>
                        <Badge><SiPostgresql fill={'#0064a5'} strokeWidth={0.5} stroke={'#0064a5'}/>{" "} PostgreSQL</Badge>
                        <Badge><GrMysql fill={'#00758F'} strokeWidth={1} stroke={'#00758F'}/>{" "} MySQL</Badge>
                </Col>
            </Row>
            <Row className="skills-row">
                <Col>
                    <h5 className="skills-header">Other Skills{" "}</h5>
                        <Badge><FaLightbulb fill={'#00758F'} strokeWidth={1} stroke={'#00758F'}/>{" "} UX/UI Design</Badge>
                        <Badge><SiAdobexd fill={'#ff61f6'} strokeWidth={0} stroke={'#ff61f6'}/>{" "} 
                            <SiAdobeillustrator fill={'#ED2224'} strokeWidth={0} stroke={'#ED2224'}/> {" "}
                            <SiAdobeindesign fill={'#562F44'} strokeWidth={0} stroke={'#562F44'}/> {" "}
                            <SiAdobephotoshop fill={'#31A8FF'} strokeWidth={0} stroke={'#31A8FF'}/> {" "} Adobe Suite</Badge>
                        <Badge><FaSketch fill={'#fa6400'} strokeWidth={0} stroke={'#fa6400'}/>{" "} Sketch</Badge>
                        <Badge><FaInvision fill={'#ff3366'} strokeWidth={0} stroke={'#ff3366'}/>{" "} inVision</Badge>
                        <Badge><SiMicrosoftexcel fill={'#1D6F42'} strokeWidth={0} stroke={'#1D6F42'}/> {" "} 
                            <SiMicrosoftword fill={'#01A6F0'} strokeWidth={0} stroke={'#01A6F0'}/> {" "}
                            <SiMicrosoftpowerpoint fill={'#D04423'} strokeWidth={0} stroke={'#D04423'}/> {" "} Microsoft Office</Badge>
                </Col>
            </Row>
        </div>
    )
    return (
        <div className="skills">
            <div className="section-container">
                <Row className="animate__animated animate__slideInLeft animate__slower">
                    <Col xs={12} className="header"> {'[  '}Skills{'  ]'}</Col>
                </Row>
                <Row className="animate__animated animate__slideInRight animate__slower">
                    <Col xs={12}>
                        <WhitePane content={content}/>
                    </Col>
                </Row>
            </div>
        </div>
)
}

export default SkillsPage