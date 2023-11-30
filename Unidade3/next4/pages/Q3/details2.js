import styles from "../../styles/details.module.css";

export default function Details2({ data, error }) {
    if (error) {
        return <div>{error}</div>;
    }

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

export async function getServerSideProps(context) {
    const { id } = context.query;
    const url = `http://www.omdbapi.com/?apikey=a1705ee9&i=${id}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return {
            props: {
                data,
            },
        };
    } catch (error) {
        return {
            props: {
                error: "Erro ao carregar o conteúdo...",
            },
        };
    }
}
