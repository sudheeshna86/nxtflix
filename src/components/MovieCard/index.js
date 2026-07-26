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
        <div className="movie-poster carousel-poster">
          <img src={poster} alt={title} className="poster-image" />
          <div className="carousel-meta-overlay">
            <div className="carousel-meta-text">
              <h3 className="carousel-title">{title}</h3>
              <div className="carousel-meta-details">
                <span className="carousel-genre">{genre}</span>
                <span className="carousel-rating">{rating}</span>
              </div>
            </div>
          </div>
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
          <div className="poster-meta-overlay">
            <div className="poster-meta">
              <h3 className="poster-title">{title}</h3>
              <div className="poster-sub">{genre} · {year} · {duration}</div>
            </div>
          </div>
        </div>
        <div className="movie-info visually-hidden">
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
        <div className="poster-meta-overlay">
          <div className="poster-meta">
            <h3 className="poster-title">{title}</h3>
            <div className="poster-sub">{genre} · {rating}</div>
          </div>
        </div>
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
        <h3 className="movie-title visually-hidden">{title}</h3>
        <div className="movie-meta visually-hidden">
          <span className="movie-genre">{genre}</span>
          <span className="movie-year">{year}</span>
        </div>
        <p className="movie-duration visually-hidden">{duration}</p>
      </div>
    </div>
  );
}

export default MovieCard;
