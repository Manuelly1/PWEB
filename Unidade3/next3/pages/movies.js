import { useState } from "react";
import styles from "../styles/movies.module.css";

export default function Movies({ initialData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState(initialData);

  const handleSearch = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=a1705ee9&s=${searchQuery}`
    );
    const newData = await res.json();
    setData(newData);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.forms}>
        <input
          type="text"
          placeholder="Digite a palavra-chave:"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Pesquisar
        </button>
      </div>
      <div className={styles.moviesContainer}>
        {data.Search &&
          data.Search.map((m) => (
            <div key={m.imdbID} className={styles.movieCard}>
              <a
                href={`https://www.imdb.com/title/${m.imdbID}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={m.Poster} alt={m.Title} />
              </a>
              <div className={styles.movieText}>
                {m.Title} --- {m.Year}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const searchQuery = query.q || 'bagdad';
  
  const res = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=a1705ee9&s=${searchQuery}`
  );  
  
  const data = await res.json();

  return {
    props: {
      initialData: data,
    },
  };
}
