const API_KEY = "8ba3d7653f6bc19597c5b7d8ef22ea73";

const requests = {
  NetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  Horror: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  TrendingDay: `/trending/movie/day?api_key=${API_KEY}`,
  TrendingWeek: `/trending/movie/week?api_key=${API_KEY}`,
  Action: `discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28`,
  Documentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=99`,
  crime: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
  Comedy: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;

// Test endpointss
//https://api.themoviedb.org/3/discover/tv?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&with_networks=213
//https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27
//https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}
//https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=28
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=99
//https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35
//https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1

//https://api.themoviedb.org/3/discover/tv?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&with_networks=213
//https://api.themoviedb.org/3/movie/top_rated?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&language=en-US
//https://api.themoviedb.org/3/discover/movie?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&language=en-US&with_genres=27
//https://api.themoviedb.org/3/trending/movie/day?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73
//https://api.themoviedb.org/3/trending/movie/week?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73
//https://api.themoviedb.org/3/discover/movie?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&language=en-US&page=1&with_genres=28
//https://api.themoviedb.org/3/discover/movie?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&language=en-US&with_genres=80
//https://api.themoviedb.org/3/discover/movie?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&language=en-US&page=1&with_genres=99
//https://api.themoviedb.org/3/discover/movie?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&language=en-US&page=1&with_genres=35
//https://api.themoviedb.org/3/movie/upcoming?api_key=8ba3d7653f6bc19597c5b7d8ef22ea73&language=en-US&page=1
