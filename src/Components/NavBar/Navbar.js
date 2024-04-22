import React, { useRef } from 'react';
import styles from './Navbar.module.css';
import me from '../../assets/images/Me.jpg';
import { motion } from 'framer-motion';

function Navbar({heroRef, aboutmeRef, projectsRef, contactRef, skillsRef}) {


  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
        {/* Use onClick para chamar a função scrollToSection com a ref correspondente */}
        <li><button className={styles.menu} onClick={() => scrollToSection(heroRef)}>Home</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(aboutmeRef)}>About Me</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
        <li><button className={styles.menu}onClick={() => scrollToSection(contactRef)}>Contact</button></li>
        <div className={styles.button}>
          <button className={styles.btn}>Let´s meet</button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
