import React from 'react'
import ProjectItens from './ProjectsItens'
import { ProjectCard } from './ProjectCard'
import styles from "./Projects.module.css"




export const Projects = ({projectsRef}) => {
  

  return (
    <section id='projects' ref={projectsRef} className={styles.project_container}>
        <h2 className={styles.project_title}>Projects</h2>
        <div className={styles.project_content}>
            {ProjectItens.map((project, id) =>{
            return <ProjectCard  key={id} project={project}/>;
        })}
        </div>

    </section>
  )
}
