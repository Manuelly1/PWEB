import { User } from "./user";
import { About } from "./about";
import style from '../style/style.module.css';

export default function Home() {
    return (
        <div className={style.body}>
          <h2 id='titulo'>
            Viva!
          </h2>
       </div>
    )
}