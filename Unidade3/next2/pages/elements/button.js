import Link from 'next/link';

export default function Button({ children, ...props }) { 
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    )
}