import movies from '../data/movies';

function getAllMovies() {
  return movies;
}

function getTrendingMovies() {
  return movies.slice(0, 12);
}

function getFreshReleaseMovies() {
  return movies.slice(12, 24);
}

function getGenres() {
  const genres = [...new Set(movies.map((movie) => movie.genre))];
  return ['All', ...genres.sort()];
}

function getMovieById(id) {
  return movies.find((movie) => movie.id === id);
}

function getMoviesByGenre(genre) {
  if (genre === 'All') {
    return movies;
  }
  return movies.filter((movie) => movie.genre === genre);
}

export {
  getAllMovies,
  getTrendingMovies,
  getFreshReleaseMovies,
  getGenres,
  getMovieById,
  getMoviesByGenre,
};
