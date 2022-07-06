import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import './statics/css/home.scss';
import 'animate.css';
import App from './App'
import AboutPage from './sections/AboutPage';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
const historyInstance = createBrowserHistory({ forceRefresh: true });

root.render(
  <React.StrictMode>
    <Router history={historyInstance}>
      <Switch>
      <Route exact path="/" render={ (routerProps) => {
          document.title = `Sivan Adler`
          return <App {...routerProps}/>
      }} />
      <Route exact path="/about" render={ (routerProps) => {
          document.title = `Sivan Adler - About`
          return <AboutPage {...routerProps}/>
      }} />
      </Switch>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
