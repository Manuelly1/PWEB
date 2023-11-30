import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../../styles/movies2.module.css";

export default function Movies3(){
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=a1705ee9&s=bagdad`, fetcher)    

    if (error) return <div>Falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <div>
            { data.Search.map( (m) => <MovieLink key={m.imdbID} movie3={m}/> )};
        </div>
    )   
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

function MovieLink({ movie3 }) {
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: "/details2",
            query: { id: movie3.imdbID }
        });
    };

    return (
        <div className={styles.divPage}>
            <div className={styles.divMovies}>
                <div onClick={handleClick} style={{ cursor: "pointer" }}>
                    {movie3.Title} --- {movie3.Year}
                </div>
            </div>
        </div>
    );
}