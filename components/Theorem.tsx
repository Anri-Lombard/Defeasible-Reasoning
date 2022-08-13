import styles from '../styles/Theorem.module.css'

const Theorem = () => {
    return (
        <div>
            <span className={styles.theorem}>Theorem:</span>
            <span className={styles.proof}>Proof:</span>
        </div>
    )
}

export default Theorem;