import React, { useEffect, useState } from 'react';
import axios from '../library/axios/axios';
import '../styles/Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map(
          (mov) => ((isLargeRow && mov.poster_path) || (!isLargeRow && mov.backdrop_path)) && (
          <img
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            key={mov.id}
            src={`${baseUrl}${isLargeRow ? mov.poster_path : mov.backdrop_path}`}
            alt={mov.name}
          />
          )
        )}
      </div>
    </div>
  );
};

export default Row;
