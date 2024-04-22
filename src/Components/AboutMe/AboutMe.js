import styles from "./AboutMe.module.css";
import React from "../../assets/images/react.png"
import javascript from "../../assets/images/javascript-logo-javascript-icon-transparent-free-png.webp"
import tailwind from "../../assets/images/Tailwind_CSS_Logo.svg.png"
import css from "../../assets/images/CSS3_logo.svg.png"
import git from "../../assets/images/GIT.png"
import jest from "../../assets/images/JEST.png"
import nodejs from "../../assets/images/nodejs-1-logo.png"
import postgresql from "../../assets/images/postgresql-icon-28.jpg"
import html from "../../assets/images/html-512.webp"
import typescript from "../../assets/images/typescript.png"
import { motion } from "framer-motion";




function AboutMe({aboutmeRef, skillsRef}) {



  const variants = {
    initial: {
      x: 100,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.section id='about' ref={aboutmeRef}  className={styles.aboutme_container} variants={variants} initial='initial' whileInView="animate" >
         <section id="skills" ref={skillsRef} className={styles.skills_container}>
            <h1 className={styles.title_skills}>Skills</h1>
        <ul className={styles.skills_content}>
          <li><img  src={html} alt="html"></img></li>
          <li><img  src={css} alt="css"></img></li>
          <li><img  src={tailwind} alt="tailwind"></img></li>
          <li><img  src={javascript} alt="javascript"></img></li>
          <li><img  src={React} alt="React"></img></li>
          <li><img  src={typescript} alt="typescript"></img></li>
          <li><img  src={nodejs} alt="nodejs"></img></li>
          <li><img  src={jest} alt="jest"></img></li>
          <li><img  src={postgresql} alt="postgresql"></img></li>
          <li><img  src={git} alt="git"></img></li>
        </ul>
      </section>
      <div className={styles.aboutme_content}>
        <div >
          <h1 className={styles.title_aboutme}>About me</h1>
        </div>
        <div className={styles.description_aboutme}>
          <p>
          Hello! My name is João Vinicius, I'm a Brazilian developer passionate about technology, currently living in Portugal. At 24 years old, I love solving problems and creating innovative solutions through programming. Throughout my journey as a developer, I have developed skills in areas such as web development, object-oriented programming, and algorithmic problem solving. I am constantly looking for ways to improve my technical skills and stay up to date with industry trends and advancements.😁
          </p>

          <p>I'm excited to be part of a dynamic team and apply my technical and creative skills to create impactful solutions. If you're looking for a dedicated developer eager to learn, I'm ready to make a difference!💻🤓  </p>
        
        </div>
      </div>
     
    </motion.section>
  );
}
export default AboutMe;
