import axios from '../../utils/axios';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { useEffect, useState } from "react";

const Movies = ({ title, url }) => {
  const [{ movies }, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(url);
      console.log(res.data.results);
      setMovies(res.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <div className="movies">
      <h2 className="row-title">{title}</h2>
      <div className="movies__row">
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))};
            </div>
    </div>
  );
};

export default Movies;
