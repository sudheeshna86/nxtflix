import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import MovieCard from '../../components/MovieCard';
import { useWatchLater } from '../../context/WatchLaterContext';
import './index.css';

function WatchLater() {
  const navigate = useNavigate();
  const { watchLater } = useWatchLater();
  const hasMovies = watchLater.length > 0;

  return (
    <div className="watch-later-page">
      <Header />

      <div className="watch-later-content">
        <div className="watch-later-heading">
          <h1 className="watch-later-title">Watch Later</h1>
        </div>

        {hasMovies ? (
          <div className="watch-later-grid">
            {watchLater.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster={movie.poster}
                rating={movie.rating}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                duration={movie.duration}
                variant="watchLater"
              />
            ))}
          </div>
        ) : (
          <div className="watch-later-empty-state">
            <p className="empty-state-text">Your Watch Later list is empty.</p>
            <button className="browse-movies-btn" onClick={() => navigate('/')}>
              Browse Movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchLater;