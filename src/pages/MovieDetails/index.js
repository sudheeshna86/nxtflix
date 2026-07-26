import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import movies from '../../data/movies';
import './index.css';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieId = Number(id);
  const movie = movies.find((item) => item.id === movieId);

  useEffect(() => {
    if (!movie) {
      navigate('/not-found');
    }
  }, [movie, navigate]);

  if (!movie) {
    return null;
  }

  return (
    <div className="movie-details-page">
      <Header />

      <div className="movie-hero">
        <img className="hero-backdrop" src={movie.backdrop} alt={movie.title} />
        <div className="hero-overlay" />

        <div className="movie-details-content">
          <img className="movie-poster-large" src={movie.poster} alt={movie.title} />

          <div className="movie-details-info">
            <h1 className="movie-title">{movie.title}</h1>

            <div className="movie-meta">
              <span className="genre-badge">{movie.genre}</span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span className="rating">★ {movie.rating}</span>
            </div>

            <p className="movie-overview">{movie.overview}</p>

            <div className="movie-actions">
              <button className="watch-later-btn">+ Watch Later</button>
              <button className="go-back-btn" onClick={() => navigate(-1)}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;