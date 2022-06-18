import './App.css';
import HomePage from './sections/HomePage';
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Element className="home" name="home">
        <HomePage/>
      </Element>
      <Element className="about" name="about">
        {/* <AboutPage/> */}
      </Element>
    </div>
  );
}

export default App;
