import styles from "../styles/About.module.css";

export function About() {
  return (
    <div>
        <h1>
            Sobre esta empresa de assistência:
        </h1>
        <p className={styles.paragrafoAbout}>
            Nós prestamos assistência na escolha de um BOM repertório musical.
        </p>
    </div>
  );
}
