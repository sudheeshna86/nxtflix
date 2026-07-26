import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import MovieCarousel from '../../components/MovieCarousel';
import MovieCard from '../../components/MovieCard';
import HeroBanner from './components/HeroBanner';
import GenreFilters from './components/GenreFilters';
import { getTrendingMovies, getFreshReleaseMovies, getMoviesByGenre } from '../../utils/movieHelpers';
import './index.css';

function Home() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const navigate = useNavigate();

  const trendingMovies = getTrendingMovies();
  const freshReleases = getFreshReleaseMovies();
  const filteredMovies = getMoviesByGenre(selectedGenre);

  return (
    <div className="home-page">
      <Header />
      <HeroBanner />
      <MovieCarousel title="Trending Now" movies={trendingMovies} direction="left" />
      <MovieCarousel title="Fresh Releases" movies={freshReleases} direction="right" />
      <GenreFilters selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            rating={movie.rating}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            duration={movie.duration}
            variant="grid"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;