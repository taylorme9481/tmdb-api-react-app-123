import React from 'react';
import './MovieItem.css';


const MovieItem = ({ movie }) => {
  const { title, name } = movie;
  const history = useHistory();

  return (
    <div className="movie_item">
      <img
        onClick={() => history.push('/movie/${id}')}
        src={'https://image.tmdb.org/t/p/w500/${poster_path}'}
        title={title ? title : name}
        alt={title}
      />
    </div>
  );
};


export default MovieItem;
