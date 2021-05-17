const API_KEY = "6e9e15ff0f9081c36d6d12c21106e62f";

const request = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=es-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHornorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomaceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default request;