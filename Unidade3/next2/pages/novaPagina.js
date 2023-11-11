import { About } from "./about/about";
import { Contact } from "./user/contact";
import { Footer } from "./elements/footer";
import { Button } from "./elements/button";
import { IconUser } from "./elements/icons";
import styles from "./styles/novaPagina.modules.css";

export default function Main(){
    return (
        <div>
            <Link href="elements/icons">
                <IconUser />
            </Link>
            <h1 className={styles.titleMain}>
                Contrate os nossos serviços de assistência!
            </h1>
        </div>
    )
}
