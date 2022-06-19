import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteContainer from './RouteContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import Navigation from './common/Nav'
import './statics/css/home.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from "./common/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
const historyInstance = createBrowserHistory({ forceRefresh: true });

root.render(
  <React.StrictMode>
    <Router history={historyInstance}>
      <Container fluid>
        <Row id="main-row">
          <Col xs={12} id="left-col">
            <Navigation />
          </Col>
          <Col xs={12} id="right-col">
            <RouteContainer/>
            <Footer/>
          </Col>
        </Row>
      </Container>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
