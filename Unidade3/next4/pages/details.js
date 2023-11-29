import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../styles/details.module.css";

const fetcher = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

export default function Details() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <div>Carregando...</div>;
    }

    const url = `http://www.omdbapi.com/?apikey=a1705ee9&i=${id}`;
    const { data, error } = useSWR(url, fetcher);

    if (error) return <div>Erro ao carregar o conteúdo...</div>;
    if (!data) return <div>Carregando...</div>;

    return (
        <div className={styles.divContainer}>
            <h1 className={styles.titleDetails}>{data.Title}</h1>
            <img src={data.Poster} alt={data.Title} className={styles.img} />
            <div className={styles.divParagrafos}>
                <p>{data.Plot}</p>
                <p>Year: {data.Year}</p>
                <p>Director: {data.Director}</p>
            </div>
        </div>
    );
}