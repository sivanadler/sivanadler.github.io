import WhitePane from '../common/WhitePane'
import Wave from '../common/Wave'
import { Row, Col } from 'react-bootstrap'
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
  FaGitSquare,
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
            <h5 className="skills-header">Areas of Expertise {" "}</h5>
            <Row className="skills-row">
                <Col>
                    <FaReact fill={'#61DBFB'} stroke-width={8} stroke={'#61DBFB'}/>
                    <div className="skills-text">ReactJS</div>
                </Col>

                <Col>
                    <IoLogoJavascript  fill={'#F0DB4F'} stroke-width={8} stroke={'#F0DB4F'}/>
                    <div className="skills-text">Javascript</div>
                </Col>

                <Col>
                    <SiRedux fill={'#764abc'} stroke-width={0.5} stroke={'#764abc'}/>
                    <div className="skills-text">Redux</div>
                </Col>

                <Col>
                    <FaHtml5 fill={'#e34c26'} stroke-width={0.5} stroke={'#e34c26'}/>
                    <div className="skills-text">HTML</div>
                </Col>

                <Col>
                    <FaCss3Alt fill={'#264de4'} stroke-width={0.5} stroke={'#264de4'}/>
                    <div className="skills-text">CSS</div>
                </Col>
                
                <Col>
                    <FaGithub fill={'#171515'} stroke-width={0.5} stroke={'#171515'}/>
                    <div className="skills-text">Github</div>
                </Col>

                <Col>
                    <FaGitSquare fill={'#f34f29'} stroke-width={0.5} stroke={'#f34f29'}/>
                    <div className="skills-text">Git</div>
                </Col>
            </Row>   
            <br/>
            <h5 className="skills-header">Technical Skills {" "} </h5>
            <Row className="skills-row">
                <Col>
                    <RiAngularjsFill fill={'#dd1b16'} stroke-width={0} stroke={'#dd1b16'}/>
                    <div className="skills-text">AngularJS</div>
                </Col>

                <Col>
                    <FaAws fill={'#FF9900'} stroke-width={6} stroke={'#FF9900'}/>
                    <div className="skills-text">AWS</div>
                </Col>

                <Col>
                    <FaDocker fill={'#0db7ed'} stroke-width={6} stroke={'#0db7ed'}/>
                    <div className="skills-text">Docker</div>
                </Col>

                <Col>
                    <FaPython fill={'#4B8BBE'} stroke-width={2} stroke={'#4B8BBE'}/>
                    <div className="skills-text">Python</div>
                </Col>

                <Col>
                    <DiRuby fill={'#A91401'} stroke-width={0} stroke={'#A91401'}/>
                    <div className="skills-text">Ruby</div>
                </Col>

                <Col>
                    <SiPostgresql fill={'#0064a5'} stroke-width={0.5} stroke={'#0064a5'}/>
                    <div className="skills-text">PostgreSQL</div>
                </Col>

                <Col>
                    <GrMysql fill={'#00758F'} stroke-width={1} stroke={'#00758F'}/>
                    <div className="skills-text">MySQL</div>
                </Col>
            </Row>
            <br/>

             <h5 className="skills-header">Other Skills {" "}</h5>
            <Row className="skills-row">
                <Col>
                    <FaLightbulb fill={'#00758F'} stroke-width={1} stroke={'#00758F'}/>
                    <div className="skills-text">UX/UI Design</div>
                </Col>

                <Col>
                    <FaSketch fill={'#fa6400'} stroke-width={0} stroke={'#fa6400'}/>
                    <div className="skills-text">Sketch</div>
                </Col>

                <Col>
                    <FaInvision fill={'#ff3366'} stroke-width={0} stroke={'#ff3366'}/>
                    <div className="skills-text">Sketch</div>
                </Col>

                <Col>
                    <SiAdobexd fill={'#ff61f6'} stroke-width={0} stroke={'#ff61f6'}/>
                    <div className="skills-text">Adobe XD</div>
                </Col>

                <Col>
                    <SiAdobeillustrator fill={'#ED2224'} stroke-width={0} stroke={'#ED2224'}/>
                    <div className="skills-text">Illustrator</div>
                </Col>

                <Col>
                    <SiAdobeindesign fill={'#562F44'} stroke-width={0} stroke={'#562F44'}/>
                    <div className="skills-text">Indesign</div>
                </Col>

                <Col>
                    <SiAdobephotoshop fill={'#31A8FF'} stroke-width={0} stroke={'#31A8FF'}/>
                    <div className="skills-text">Photoshop</div>
                </Col>
            </Row>
            <Row className="skills-row">
                <Col>
                    <SiMicrosoftexcel fill={'#1D6F42'} stroke-width={0} stroke={'#1D6F42'}/>
                    <div className="skills-text">Excel</div>
                </Col>

                <Col>
                    <SiMicrosoftword fill={'#01A6F0'} stroke-width={0} stroke={'#01A6F0'}/>
                    <div className="skills-text">Word</div>
                </Col>

                <Col>
                    <SiMicrosoftpowerpoint fill={'#D04423'} stroke-width={0} stroke={'#D04423'}/>
                    <div className="skills-text">Powerpoint</div>
                </Col>

                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    )
    return (
        <div className="skills">
            <Wave />
            <div className="section-container">
                <h1 className="header">Skills</h1>
                <WhitePane content={content}/>

            </div>
        </div>
    )
}

export default SkillsPage