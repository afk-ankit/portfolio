import styles from '../styles/Head.module.css'
function Head() {
    return (
        <div className={styles.head}>
            <div>
                <a>Ankit Sharma</a>
            </div>
            <div className={styles.navItems}>
                <a className={styles.a} >Works</a>
                <a className={styles.a}>Skillset</a>
                <a className={styles.a}>Contact</a>
            </div>
        </div>
    )
}

export default Head