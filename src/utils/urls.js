const API_KEY = `602ffba9442593b52d93bc5c7bea0054`;

const URLS = {
    TRENDING: `/trending/all/week?api_key=${API_KEY}`,
    POPULAR: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    TOP_RATED: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    LATEST: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    SEARCH: `/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    MOVIE_DETAIL: `/movie/{movie_id}?api_key=${API_KEY}&language=en-US`,
};


export default URLS;

