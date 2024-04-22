import './App.css';
import AboutMe from './Components/AboutMe/AboutMe.js';
import Hero from './Components/Hero/Hero.js';
import Navbar from './Components/NavBar/Navbar.js';
import { Projects } from './Components/Projects/Projects.js';
import { Form } from './Components/Form/Form.js';
import { useRef } from 'react';

function App() {
  const heroRef = useRef(null);
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
    <Navbar heroRef={heroRef} aboutmeRef={aboutmeRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef}/>
    <Hero heroRef={heroRef}/>
    <AboutMe aboutmeRef={aboutmeRef} skillsRef={skillsRef}/>
    <Projects projectsRef={projectsRef}/>
    <Form contactRef={contactRef}/>
    </>
  );
}

export default App;
