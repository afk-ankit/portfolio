import styles from '../styles/Projects.module.css'
import GridProject from './GridProject'
import { motion } from 'framer-motion'



function Project() {
    return (
        <div className={styles.container}>
            <div style={{
                lineHeight: "150px",
                position: 'relative',
                left: "-10rem"
            }}

                className={styles.lheading}
            >PROJECTS
            </div>
            <GridProject title="Chat App" />
            <GridProject title="3D Punks" />
            <GridProject title="Amazon Clone" />

        </div>
    )
}

export default Project