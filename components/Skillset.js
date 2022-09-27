import styles from '../styles/Skillset.module.css'
import { motion } from 'framer-motion'
import GridSkills from './GridSkills'


function Skillset() {
    return (
        <div className={styles.container}>
            <div style={{
                lineHeight: "150px",
                position: 'relative',
                left: "-10rem"
            }}

            >SKILLSET
            </div>

            <motion.div initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}>
                <h2 className={styles.heading}>Languages</h2>
                <div className={styles.lGrid}>
                    <GridSkills skill={"HTML"} src={"./skills/html.png"} />
                    <GridSkills skill={"JS"} src={'./skills/js.png'} />
                    <GridSkills skill={"TYPESCRIPT"} src={"./skills/typescript.png"} />
                    <GridSkills skill={"SOLIDITY"} src={"./skills/solidity.png"} className={styles.round} />
                    <GridSkills skill={"C++"} src={"./skills/c.png"} />

                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}>
                <h2 className={styles.heading}>Frontend Frameworks</h2>
                <div className={styles.lGrid}>

                    <GridSkills skill={"REACT JS"} src={"./skills/react.png"} />
                    <GridSkills skill={"NEXT JS"} src={"./skills/next.png"} />
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}>
                <h2 className={styles.heading}>Backend</h2>
                <div className={styles.lGrid}>
                    <GridSkills skill={"Node JS"} src={"./skills/nodejs.png"} />
                    <GridSkills skill={"EXPRESS JS"} src={"./skills/express.png"} />
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}>
                <h2 className={styles.heading}>Database</h2>
                <div className={styles.lGrid}>
                    <GridSkills skill={"MONGO DB"} src={"./skills/mongodb.png"} />
                    <GridSkills skill={"FIREBASE"} src={"./skills/firebase.png"} />
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}>
                <h2 className={styles.heading}>UI/UX</h2>
                <div className={styles.lGrid}>
                    <GridSkills skill={"TAILWIND CSS"} src={"./skills/tailwind.png"} />
                    <GridSkills skill={"BOOTSTRAP"} src={'./skills/bootstrap.png'} />
                    <GridSkills skill={"MATERIAL UI"} src={"./skills/materialui.png"} />
                    <GridSkills skill={"FIGMA"} src={"./skills/figma.png"} className={styles.round} />
                </div>
            </motion.div>

        </div >
    )
}

export default Skillset