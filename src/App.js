import React, { useEffect, Suspense, lazy } from 'react';
import './App.css';
import { ClipLoader } from 'react-spinners';
import Footer from "./common/Footer";
import Navbar from './common/Navbar'
import "./statics/css/common.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Wave from './common/Wave'
import HamburgerNav from './common/HamburgerNav';

const HomePage = lazy(() => import("./sections/HomePage"));
const AboutPage = lazy(() => import("./sections/AboutPage"));
const SkillsPage = lazy(() => import("./sections/SkillsPage"));
const ExperiencePage = lazy(() => import("./sections/ExperiencePage"));
const EducationPage = lazy(() => import("./sections/EducationPage"));
const ContactPage = lazy(() => import("./sections/ContactPage"));

function App() {

  useEffect(() => {
    window.location.hash = ""
    AOS.init()
  },[]);


  return (
    <div id="main-container">
      <Wave />
        <Navbar />
        <HamburgerNav />
        <Suspense fallback={<ClipLoader color="#003967" css="display: block; margin: 0 auto"/>}>
          <section className="element" name="home" id="home">
            <HomePage /> 
          </section>
          <section className="element" name="about" id="about">
              <AboutPage /> 
          </section>
          <section className="element" name="skills" id="skills">
              <SkillsPage /> 
          </section>
          <section className="element" name="experience" id="experience">
              <ExperiencePage /> 
          </section>
          <section className="element" name="education" id="education">
              <EducationPage /> 
          </section>
          <section className="element" name="contact" id="contact">
              <ContactPage /> 
          </section>
          <Footer />
      </Suspense>
    </div>
  );
}

export default App;
