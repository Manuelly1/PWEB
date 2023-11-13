import { About } from "./about/about";
import { Contact } from "./user/contact";
import { Footer } from "./elements/footer";
import { Button } from "./elements/button";
import styles from "./styles/novaPagina.module.css";

export default function Main(){
    return (
        <div className={styles.divMain}>
            <h1 className={styles.titleMain}>
                Contrate os nossos serviços de assistência!
            </h1>
            <Button>Sobre</Button>
            <Button>Contato</Button>
            <Footer />
        </div>
    )
}
