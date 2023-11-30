import Head from "next/head";
import JsonObjects from "../components/jsonObjects";
import styles from "../styles/application.module.css";

export default function ApplicationJsonObjects() {
    return (
      <div className={styles.container}>
          <h1 className={styles.title}>Informações de IP</h1>
          <div className={styles.ipInfo}>
            <JsonObjects />
          </div>
      </div>
    );
}