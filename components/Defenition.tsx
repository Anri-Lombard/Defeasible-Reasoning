import styles from '../styles/Defenition.module.css';

const Defenition = (props: any) => {
    return (
        <div className={styles.defenition}>
            {props.children}
        </div>
    )
}

export default Defenition;