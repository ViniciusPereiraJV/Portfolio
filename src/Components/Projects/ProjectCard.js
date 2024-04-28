import React from 'react'
import styles from "./ProjectCard.module.css"
import { motion } from "framer-motion";


export const ProjectCard = ({project : {title, skills, imageSrc, description, demo, source}}) => {
 
  const variants = {
    initial: {
      x: 0,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        staggerChildren: 0.1,
      },
    },
  };
  return (
  
    
  
    <motion.div className={styles.card_container} variants={variants} initial='initial' whileInView="animate">
    <img className={styles.card_img} src={imageSrc} alt={`Image of ${title}`}></img>
    <h3 className={styles.card_title}>{title}</h3>
    <p className={styles.card_description}>{description}</p>
    <ul className={styles.card_skills}>
        {skills.map((skill, id) =>(
            <li className={styles.card_skill} key={id}>{skill}</li>
          ))}
    </ul>
    <div className={styles.card_links}>
        <a className={styles.card_link}href= {demo} target='_blank'>Demo</a>
        <a className={styles.card_link}href= {source}target='_blank'>Source</a>
    </div>
    </motion.div>
  );
};
