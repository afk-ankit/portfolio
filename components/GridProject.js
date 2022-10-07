import styles from '../styles/Projects.module.css'
import { motion } from 'framer-motion'
function GridProject({ title }) {
    return (<motion.div initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}>
        <h2 className={styles.heading}>{title}</h2>

        <div className={styles.projectContainer}>
            <div className={styles.imgContainer}>
                <img src="./image 5.png" alt="not any" />
            </div>
            <div className={styles.description}>
                <h2 className={styles.descriptionHeading}>
                    DESCRIPTION
                </h2>
                <p className={styles.descriptionPara}>
                    Description of the app this is that this is this and we are this and powertrd by  this and that
                    and so on and so forth we were allowed to this and that
                </p>
                <h2 className={styles.descriptionHeading} style={{
                    marginTop: "1.5rem"
                }}>
                    TECH USED
                </h2>
                <p className={styles.descriptionPara}>
                    React, Redux, Firebase, Css, Material UI
                </p>
                <div className={styles.button}>
                    <p>VISIT</p>
                </div>
            </div>
        </div>
    </motion.div>);
}

export default GridProject