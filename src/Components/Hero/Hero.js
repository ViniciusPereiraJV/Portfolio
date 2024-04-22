import styles from "./Hero.module.css"
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"
import profile from "../../assets/images/Profile.jpeg"
import {motion} from "framer-motion"


function Hero({heroRef}) {

    const textVariants = {
        initial:{
            x: -500,
            opacity: 0,
        },
        animate:{
            x: 0,
            opacity: 1,
            transition:{
                duration:1,
                staggerChild:0.2,
            }
        }
    }

    return(
        <section id="hero" ref={heroRef} className={styles.container_hero}>
            <motion.div variants={textVariants} initial="initial"  whileInView="animate" className={styles.home_info_hero}>
                <motion.h2 whileInView="animate" variants={textVariants}>João Vinicius</motion.h2>
                <motion.h3 whileInView="animate" variants={textVariants}> I´m a <motion.span whileInView="animate" variants={textVariants}></motion.span></motion.h3>
                <motion.p whileInView="animate" variants={textVariants}>Passionate about technology and transforming ideas into solutions</motion.p>
            </motion.div>
            <motion.div whileInView="animate" className={styles.card_profile}>
                <motion.img whileInView="animate" initial={{opacity: 0, scale:0.2}} animate={{opacity: 1, scale:1, y:40, x:0}} transition={{duration: .5, delay: 0 }} src={profile} alt="profile"  className={styles.profile}></motion.img>
                <div className={styles.social_medias}>
                    <ul>
                        <li ><a href="https://www.linkedin.com/in/joao-vinicius-pereira-pinheiro/" className={styles.linkedin}><FaLinkedin size={60}/></a></li>
                        <li><a href="https://www.instagram.com/viniciusvondutch/" className={styles.instagram}><FaInstagram size={60}/></a></li>
                        <li><a href="https://www.facebook.com/vinicius.pereira.7982780/" className={styles.facebook}><FaFacebook size={60}/></a></li>
                        <li><a href="https://github.com/ViniciusPereiraJV" className={styles.github}><FaGithub size={60}/></a></li>
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}
export default Hero