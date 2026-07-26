import MovieCard from '../MovieCard';
import './index.css';

function MovieCarousel({ title, movies, direction = 'left' }) {
  const loopedMovies = [...movies, ...movies];

  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-container">
        <div className={`carousel-row ${direction}`}>
          {loopedMovies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} className="carousel-item">
              <MovieCard
                id={movie.id}
                poster={movie.poster}
                title={movie.title}
                genre={movie.genre}
                rating={movie.rating}
                variant="carousel"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCarousel;
