import MovieCard from '../MovieCard';
import './index.css';

function MovieCarousel({ title, movies }) {
  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-container">
        <div className="carousel-row">
          {movies.map((movie) => (
            <div key={movie.id} className="carousel-item">
              <MovieCard
                poster={movie.poster}
                rating={movie.rating}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                duration={movie.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCarousel;
