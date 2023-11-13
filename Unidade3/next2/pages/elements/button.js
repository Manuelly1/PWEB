import styles from "../styles/Button.module.css";

export function Button({ children, ...props }) { 
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
}