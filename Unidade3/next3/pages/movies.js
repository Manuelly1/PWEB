import React, { useState } from 'react';
import styles from '../styles/movies.module.css';

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const data = {
    "Search": [
      {
        "Title": "Bagdad Café",
        "Year": "1987",
        "imdbID": "tt0095801",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmUwZGZhZTktNGNmOS00NDA0LWEzYWUtZjE2ODA5OTM2OTc2XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
      },
      {
        "Title": "The Thief of Bagdad",
        "Year": "1940",
        "imdbID": "tt0033152",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWFhYjg4NTEtY2IzMS00YTc2LTg1NGUtMTEzNDBlZDIxZTk3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
      },
      {
        "Title": "Bagdad",
        "Year": "1949",
        "imdbID": "tt0041149",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjAxYTJmMmItYzZhMS00OWMwLTkxMjEtZjVmNmM3ZGRlZTljXkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_SX300.jpg"
      },
      {
        "Title": "Bowery to Bagdad",
        "Year": "1955",
        "imdbID": "tt0044388",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTMwMTUyZTktOTk4OC00ZGY2LWFmMzAtYjkxMWMxNjdmOTg4XkEyXkFqcGdeQXVyNDY3MzU2MDM@._V1_SX300.jpg"
      },
      {
        "Title": "Babes in Bagdad",
        "Year": "1952",
        "imdbID": "tt0044389",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmNmRlNzAtZDNjYi00ZjQ0LTljYTktZGUxOGNhMjFhZWI1XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg"
      }
    ],
    "totalResults": "59",
    "Response": "True"
  };

  const searchByKeyword = (keyword) => {
    const results = data.Search.filter(movie => movie.Title.toLowerCase().includes(keyword.toLowerCase()));
    setSearchResults(results);
  };

  const handleSearch = () => {
    searchByKeyword(searchTerm);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Digite uma palavra-chave"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.inputSearch}
        />
        <button onClick={handleSearch} className={styles.buttonSearch}>
          Pesquisar
        </button>
      </div>

      {searchResults.length > 0 ? (
        <div className={styles.movieContainer}>
          {searchResults.map((movie) => (
            <div key={movie.imdbID} className={styles.movieCard}>
              <h2 className={styles.movieTitle}>
                {movie.Title} ({movie.Year})
              </h2>
              <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}