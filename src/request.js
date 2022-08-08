const API_KEY = "6f26fd536dd6192ec8a57e94141f8b20";

//Endpoints
const request = {
    peliculaDestacada: `/movie/popular?api_key=${API_KEY}` ,
    populares:`/movie/popular?api_key=${API_KEY}`,
    misPeliculas: `/discover/movie?api_key=${API_KEY}&with_genres=35`
}

export default request

//En el caso de que los endpoinst fueran mas, más tarde en el desarrollo sería mas facil hacer las request