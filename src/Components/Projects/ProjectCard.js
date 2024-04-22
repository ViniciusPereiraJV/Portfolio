import React from 'react'
import styles from "./ProjectCard.module.css"
import img from "./weather.png"


export const ProjectCard = ({project : {title, skills, description, demo, source}}) => {
  return (
    <div className={styles.card_container}>
    <img className={styles.card_img} src={img} alt={`Image of ${title}`}></img>
    <h3 className={styles.card_title}>{title}</h3>
    <p className={styles.card_description}>{description}</p>
    <ul className={styles.card_skills}>
        {skills.map((skill, id) =>(
            <li className={styles.card_skill} key={id}>{skill}</li>
          ))}
    </ul>
    <div className={styles.card_links}>
        <a className={styles.card_link}href= {demo}>Demo</a>
        <a className={styles.card_link}href= {source}>Source</a>
    </div>
    </div>
  );
};
