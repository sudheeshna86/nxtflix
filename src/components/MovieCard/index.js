import { useNavigate } from 'react-router-dom';
import './index.css';

function MovieCard({ id, poster, rating, title, genre, year, duration, variant = 'grid' }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  if (variant === 'carousel') {
    return (
      <div className="movie-card carousel-card" onClick={handleClick}>
        <div className="movie-poster">
          <img src={poster} alt={title} className="poster-image" />
        </div>
      </div>
    );
  }

  if (variant === 'watchLater') {
    return (
      <div className="movie-card watch-later-card" onClick={handleClick}>
        <div className="movie-poster">
          <img src={poster} alt={title} className="poster-image" />
          <div className="rating-badge">{rating}</div>
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          <div className="movie-meta">
            <span className="movie-genre">{genre}</span>
            <span className="movie-year">{year}</span>
          </div>
          <p className="movie-duration">{duration}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-card grid-card" onClick={handleClick}>
      <div className="movie-poster">
        <img src={poster} alt={title} className="poster-image" />
        <div className="rating-badge">{rating}</div>
        <div className="play-overlay">
          <svg
            className="play-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-meta">
          <span className="movie-genre">{genre}</span>
          <span className="movie-year">{year}</span>
        </div>
        <p className="movie-duration">{duration}</p>
      </div>
    </div>
  );
}

export default MovieCard;
