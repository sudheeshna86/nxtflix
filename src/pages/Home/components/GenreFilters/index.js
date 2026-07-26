import './index.css';

function GenreFilters() {
  const genres = [
    'All',
    'Action',
    'Drama',
    'Comedy',
    'Thriller',
    'Sci-Fi',
    'Romance',
    'Horror',
    'Fantasy',
  ];

  return (
    <div className="genre-filters">
      <div className="filters-container">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-chip ${genre === 'All' ? 'active' : ''}`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilters;
