import { getGenres } from '../../../../utils/movieHelpers';
import './index.css';

function GenreFilters({ selectedGenre, onGenreSelect }) {
  const genres = getGenres();

  return (
    <div className="genre-filters">
      <div className="filters-container">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-chip ${genre === selectedGenre ? 'active' : ''}`}
            onClick={() => onGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilters;
