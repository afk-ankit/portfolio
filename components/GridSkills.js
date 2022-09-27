import styles from '../styles/Skillset.module.css'
function GridSkills({ src, skill }) {
    return (<div className={styles.gridItem}>
        <img src={src} alt="" className={styles.image} />
        <p>{skill}</p>
    </div>);
}


export default GridSkills