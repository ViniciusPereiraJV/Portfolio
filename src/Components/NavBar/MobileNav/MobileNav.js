import React from "react";
import styles from "./MobileNav.module.css"
import { Button } from "../../Button/Button";


export const MobileNav = ({ isOpen, toggleMenu, heroRef, aboutmeRef, projectsRef, contactRef, skillsRef }) => {

    const scrollToSection = (ref) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <>
      <div
        className={`${styles.mobile_menu} ${isOpen ? `${styles.active}` : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.mobile_menu_container}>
          <img></img>
          <ul>
            <li>
              <button
                className={styles.menu}
                onClick={() => scrollToSection(heroRef)}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={styles.menu}
                onClick={() => scrollToSection(aboutmeRef)}
              >
                About Me
              </button>
            </li>
            <li>
              <button
                className={styles.menu}
                onClick={() => scrollToSection(skillsRef)}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={styles.menu}
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={styles.menu}
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </button>
            </li>
            <Button contactRef={contactRef} >Let´s Meet</Button>
          </ul>
        </div>
      </div>
    </>
  );
};
