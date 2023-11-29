import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../styles/movies2.module.css";

export default function Movies2(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=a1705ee9&s=bagdad`, fetcher)    

    if (error) return <div>Falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (

        <div>
            { data.Search.map( (m) => <MovieLink key={m.imdbID} movie2={m}/> )};
        </div>
    )   
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

function MovieLink({ movie2 }) {
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: "/details",
            query: { id: movie2.imdbID }
        });
    };

    return (
        <div className={styles.divPage}>
            <div className={styles.divMovies}>
                <div onClick={handleClick} style={{ cursor: "pointer" }}>
                    {movie2.Title} --- {movie2.Year}
                </div>
            </div>
        </div>
    );
}