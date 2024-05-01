import React, { useRef, useState } from 'react';
import styles from './Navbar.module.css';
import me from '../../assets/images/Me.jpg';
import { motion } from 'framer-motion';
import { MobileNav } from './MobileNav/MobileNav';
import { Button } from '../Button/Button.js';

function Navbar({heroRef, aboutmeRef, projectsRef, contactRef, skillsRef}) {

  const [openMenu, setOpenMenu] = useState(false);

  
  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  };


  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (<>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} heroRef={heroRef} aboutmeRef={aboutmeRef} projectsRef={projectsRef} contactRef={contactRef} skillsRef={skillsRef}/>
    <nav className={styles.navbar_container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.logo}
      >
        <img src={me} alt="" />
        <h3>João Vinicius</h3>
      </motion.div>
      <ul className={styles.navbar_content}>
        <li><button className={styles.menu} onClick={() => scrollToSection(heroRef)}>Home</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(aboutmeRef)}>About Me</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(contactRef)}>Contact</button></li>
       <Button contactRef={contactRef}>Let´s meet</Button>
          
      </ul>
      <button className={styles.menu_btn} onClick={toggleMenu}>
            <span className={openMenu ? styles.x : styles.hamburguer}></span>
          </button>
    </nav>
    </>
  );
}

export default Navbar;
