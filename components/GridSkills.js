import styles from '../styles/Skillset.module.css'
function GridSkills({ src, skill }) {
    return (<div className={styles.gridItem}>
        <img src={src} alt="" />
        <p>{skill}</p>
    </div>);
}


export default GridSkills