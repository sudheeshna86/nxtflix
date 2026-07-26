import './index.css';

function MovieCard({ poster, rating, title, genre, year, duration }) {
  return (
    <div className="movie-card">
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

export default MovieCard;
