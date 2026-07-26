import Header from '../../components/Header';
import MovieCarousel from '../../components/MovieCarousel';
import HeroBanner from './components/HeroBanner';
import GenreFilters from './components/GenreFilters';
import moviesData from '../../data/moviesData';
import './index.css';

function Home() {
  const trendingMovies = moviesData.slice(0, 12);
  const freshReleases = moviesData.slice(12, 24);

  return (
    <div className="home-page">
      <Header />
      <HeroBanner />
      <MovieCarousel title="Trending Now" movies={trendingMovies} />
      <MovieCarousel title="Fresh Releases" movies={freshReleases} />
      <GenreFilters />
      <div className="movies-grid">
        {moviesData.map((movie) => (
          <div key={movie.id} className="grid-item">
            <div className="movie-grid-card">
              <div className="grid-poster">
                <img src={movie.poster} alt={movie.title} className="grid-image" />
                <div className="grid-rating-badge">{movie.rating}</div>
              </div>
              <div className="grid-info">
                <h3 className="grid-title">{movie.title}</h3>
                <div className="grid-meta">
                  <span className="grid-genre">{movie.genre}</span>
                  <span className="grid-year">{movie.year}</span>
                </div>
                <p className="grid-duration">{movie.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;