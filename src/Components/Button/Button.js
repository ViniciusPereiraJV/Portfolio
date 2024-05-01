import React from 'react'
import styles from "./Button.module.css"

export const Button = ({contactRef}) => {
    const scrollToSection = (ref) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <div className={styles.button}>
    <button className={styles.btn} onClick={() => scrollToSection(contactRef)}>Let´s meet</button>
    </div>
  )
}
