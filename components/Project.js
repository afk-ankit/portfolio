import styles from '../styles/Projects.module.css'
import GridProject from './GridProject'




function Project() {
    return (
        <div className={styles.container}>
            <div style={{
                lineHeight: "150px",
                position: 'relative',
                left: "-10rem"
            }}
                initial={{ opacity: 0, x: -100 }}
                whileinview={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: false }}
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