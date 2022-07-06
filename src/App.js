import './App.css';
import { Row, Col } from 'react-bootstrap'
import Footer from "./common/Footer";
import Navbar from './common/Navbar'
import Wave from './common/Wave';
import "./statics/css/common.scss"
import { Element } from 'react-scroll'
import HomePage from './sections/HomePage';
import AboutPage from './sections/AboutPage';

function App() {
  return (
    <div id="main-container">
      <Row>
          <Col xs={12}><Navbar /></Col>
          <Wave />
      </Row>
      <Element name="home" className="element">
        <Row>
            <Col xs={12}> <HomePage /> </Col>
        </Row>
      </Element>
      <Element name="about" className="element">
        <Row>
            <Col xs={12}> <AboutPage /> </Col>
        </Row>
      </Element>
      <Row>
          <Col xs={12}> <Footer /> </Col>
      </Row>
    </div>
  );
}

export default App;
