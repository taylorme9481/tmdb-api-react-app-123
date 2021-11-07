import React from 'react';


const baseURL = 'https://api.themoviedb.org/3';

const URLS = {
  TRENDING: `${baseURL}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`,
  POPULAR: `${baseURL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1`,
  TOP_RATED: `${baseURL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`,
  LATEST: `${baseURL}/movie/latest?api_key=${process.env.REACT_APP_API_KEY}`,
  SEARCH: `${baseURL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&include_adult=false`,
  MOVIE_DETAIL: `${baseURL}/movie/{movie_id}?api_key=${process.env.REACT_APP_API_KEY}`,
};

export default URLS;
